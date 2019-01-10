import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class MergeTags extends Plugin {
	init() {
		console.log('MergeTags was initialized');
		const editor = this.editor;

		editor.ui.componentFactory.add('insertImage', locale => {
			const view = new ButtonView(locale);

			view.set({
				label: 'Insert image',
				icon: '',
				tooltip: true
			});

			// Callback executed once the image is clicked.
			view.on('execute', () => {
				// const imageURL = prompt('Image URL');
				console.log('clicked');
			});

			return view;
		});
	}

}
