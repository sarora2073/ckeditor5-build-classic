import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import { createDropdown, addListToDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';

export default class MergeTags extends Plugin {
	init() {


        const editor = this.editor;
        const t = editor.t;
        const defaultTitle = t('Add image');
        const dropdownTooltip = t('Image');

        // Register UI component
        editor.ui.componentFactory.add('mergeTags', locale => {

            const dropdownView = createDropdown( locale );

            dropdownView.set({
                label: 'Image',
                tooltip: true
            });
            dropdownView.buttonView.set( {
				isOn: false,
				withText: true,
				tooltip: dropdownTooltip
            });
            dropdownView.extendTemplate( {
				attributes: {
					class: [
						'ck-image-dropdown'
					]
				}
			});

            // The collection of the list items.
            const items = new Collection();

            items.add( {
                type: 'button',
                model: new Model( {
                    label: 'Upload image',
                    icon: imageIcon
                })
            });

            items.add( {
                type: 'button',
                model: new Model( {
                    label: 'Image URL',
                    icon: imageIcon
                })
            });

            // Create a dropdown with a list inside the panel.
            addListToDropdown( dropdownView, items );

            return dropdownView;
        });
    }

		// console.log('MergeTags was initialized');
		// const editor = this.editor;

		// editor.ui.componentFactory.add('mergeTags', locale => {

		// 	const dropdownView = createDropdown( locale );

		// 	const view = new ButtonView(locale);

		// 	view.set({
		// 		label: 'Insert image',
		// 		icon: 'imageIcon',
		// 		tooltip: true
		// 	});

		// 	// Callback executed once the image is clicked.
		// 	view.on('execute', () => {
		// 		// const imageURL = prompt('Image URL');
		// 		console.log('clicked');
		// 	});

		// 	return view;
		// });
	}

}
