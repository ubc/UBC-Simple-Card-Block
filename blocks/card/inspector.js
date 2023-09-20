/**
 * Internal block libraries
 */
import { icon as icon } from './icon';
import { bgColorOptions as bgColorOptions } from '../helpers';
import { txtColorOptions as txtColorOptions } from '../helpers';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { Fragment } = wp.element;

// wp.editor
const {
  InspectorControls,
  PanelColorSettings,
  MediaUpload,
  URLInput,
} = wp.editor;

// wp components
const {
  PanelBody,
  TextControl,
  Tooltip,
  Button,
  ToggleControl,
  IconButton,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {

  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        colorPaletteControl,
        toggleControl,
        imgUrl,
        imgId,
        imgAlt,
        className,
        cardUrl,
        cardUrlTitle,
        cardTextColor,
      },
      isSelected,
      setAttributes
    } = this.props;

  /**
   * Block background image select
   * @param {object} img - Selected image
   */
  const onSelectImage = img => {

    setAttributes(
      {
        imgId: img.id,
        imgUrl: img.sizes.full.url,
        imgAlt: img.alt ? img.alt : img.name,
     }
    );

  };

  /**
   * Remove img attributes if removed by the user
   */
  const onRemoveImage = () => {
    setAttributes(
      {
        imgId: null,
        imgUrl: null,
        imgAlt: null,
      }
    );
  };
    return (
      <InspectorControls>
        <PanelBody
        title={__("Card link", "ubccardblock")}
        initialOpen={false}
        >
          <div className={ className }>
            { isSelected ? (
                <Fragment>
                    <TextControl
                        id="example-input-field"
                        label={ __( 'Card title', 'ubccardblock' ) }
                        value={ cardUrlTitle }
                        placeholder={ __( 'Link title', 'ubccardblock' ) }
                        onChange={ cardUrlTitle => setAttributes( { cardUrlTitle: cardUrlTitle ? cardUrlTitle : '' } ) }
                    />
                    <p>{ __( 'Link URL', 'ubccardblock' ) }</p>
                    <form
                        className="blocks-format-toolbar__link-modal-line blocks-format-toolbar__link-modal-line"
                        onSubmit={ event => event.preventDefault() }
                    >
                        <Tooltip text="Add Link">
                            {icon}
                        </Tooltip>

                        <URLInput
                            className="url"
                            value={ cardUrl }
                            onChange={ cardUrl => setAttributes( { cardUrl } ) }
                        />
                        <IconButton
                            icon="editor-break"
                            label={ __( 'Apply', 'ubccardblock' ) }
                            type="submit"
                        />
                    </form>
                </Fragment>

            ) : (

                <p>
                    <a href={ cardUrl }>
                        { cardUrlTitle || __( 'Edit link', 'ubccardblock ' ) }
                    </a>
                </p>

            )}
          </div>
        </PanelBody>

        <PanelBody
        title={__("Background image", "ubccardblock")}
        initialOpen={false}
        >
          <div className={ className }>

            { ! imgId ? (

              <MediaUpload
                  onSelect={ onSelectImage }
                  type="image"
                  value={ imgId }
                  render={ ( { open } ) => (
                    <Button
                        className={ "button button-large" }
                        onClick={ open }
                    >
                      { __( ' Background image', 'ubccardblock' ) }
                    </Button>
                  ) }
              >
              </MediaUpload>

            ) : (

              <p class="image-wrapper">
                  <img
                    id={ 'image-id-' + imgId }
                    src={ imgUrl }
                    alt={ imgAlt }
                  />

                  { isSelected ? (

                      <Button
                          className="remove-image button button-large"
                          onClick={ onRemoveImage }
                      >
                          {/* { icons.remove } */ __( 'Remove background', 'ubccardblock' ) }
                      </Button>

                  ) : null }

              </p>
            )}

          </div>
        </PanelBody>

        <PanelColorSettings
            title={__("Color settings", "ubccardblock")}
            initialOpen={false}
            colorSettings={[
              {
                value: colorPaletteControl,
                colors: bgColorOptions,
                onChange: colorPaletteControl => {
                  setAttributes({ colorPaletteControl });
                },
                label: __("Background color")
              },
              {
                value: cardTextColor,
                colors: txtColorOptions,
                onChange: cardTextColor => {
                  setAttributes({ cardTextColor });
                },
                label: __('Text color')
              }
            ]}
          />

        <PanelBody>
          <ToggleControl
            label={__("Disable hover?", "ubccardblock")}
            checked={toggleControl}
            onChange={toggleControl => setAttributes({ toggleControl })}
          />
        </PanelBody>
      </InspectorControls>
    );
  }
}
