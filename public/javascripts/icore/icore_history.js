var ICore_History = function() {

	var stack = new Array();
	var snapshot = new Image();

	snapshot.onload = function() {

		ICore.getContext().save();
		ICore.getContext().globalCompositeOperation = 'copy';
		ICore.getContext().drawImage(snapshot, 0, 0);
		ICore.getContext().restore();

	}

	ICore.undo = function() {

		var history;

		if (stack.length > 1) {

			history = stack.pop();

		} else {

			history = stack[0];

		}

		if (history != null) {

			if (history.width != ICore.getCanvas().width
				|| history.height != ICore.getCanvas().height) {

				ICore.resizeCanvas(history.width, history.height);

				GUI.resizeWindowCanvas();

			}

			snapshot.src = history.snapshot;

		}

	}

	ICore.addHistory = function() {

		stack.push({

			'snapshot': ICore.getCanvas().toDataURL(),
			'width': ICore.getCanvas().width,
			'height': ICore.getCanvas().height

		});

	}

	ICore.addHistory();

	$.Shortcuts.add({

		'type': 'hold',
		'mask': 'Ctrl+Z',
		'handler': function() {

			ICore.undo();

		}

    }).start();

}
