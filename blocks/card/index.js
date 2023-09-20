/**
 * Block dependencies
 */

import Inspector from "./inspector";
import attributes from "./attributes";
// import CardInnerContent from "./CardInnerContent";
import "./editor.scss";
import "./style.scss";
import { hexToRGB as hexToRGB } from '../helpers';
import { ubcIcon as ubcIcon } from './icon';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

export default registerBlockType( 'ubc/simplecard', {
    title: __( 'Simple Card', 'ubccardblock' ),
    description: __( 'A card block with background image or color, title, and description reveal on hover.', 'ubccardblock' ),
    icon: ubcIcon,
    category: 'layout',
    keyword: [
        __( 'card', 'ubccardblock' ),
        __( 'backround image', 'ubccardblock' ),
        __( 'hover reveal', 'ubccardblock' )
    ],
    attributes,

    edit: props => {

        const { attributes:
            {
                cardDesc,
                cardTitle,
                colorPaletteControl,
                imgId,
                imgUrl,
                imgAlt,
                cardTextColor
            },
            className,
            setAttributes
        } = props;

        return [
            //Inspector controls
            <Inspector { ...{ setAttributes, ...props } } />,
            <section className={className} style={ { background: colorPaletteControl } }>

            { imgId ? ( <img id={ `id-${imgId}` } src={ imgUrl } alt={ imgAlt } /> ) : ''}
        
                <header
                className={`course-block--inner ${imgId ? 'has-image' : ''}`}
                style={
                    {
                        background: hexToRGB(colorPaletteControl),
                    }
                }
                >
                    <RichText
                        tagName='h2'
                        placeholder={ __( 'Card title', 'ubccardblock' ) }
                        onChange={ ( cardTitle ) => setAttributes( { cardTitle } ) }
                        value={ cardTitle }
                        className='course-block--title'
                        style={
                            {
                                color: cardTextColor
                            }
                        }
                    />
                    <RichText
                        tagName='p'
                        placeholder={ __( 'Card description.', 'ubccardblock' ) }
                        onChange={ ( cardDesc ) => setAttributes( { cardDesc } ) }
                        value={ cardDesc }
                        className='course-block--description'
                        style={
                            {
                                color: cardTextColor
                            }
                        }
                    />
                </header>
            </section>
        ];
    },

    save: props => {

        const { attributes:
            {
                cardDesc,
                cardTitle,
                colorPaletteControl,
                imgId,
                imgUrl,
                imgAlt,
                cardUrl,
                cardTextColor,
                cardUrlTitle },
            } = props;

        return (
            
            <a href={ cardUrl ? cardUrl : '' } className='course-block--link' title={ cardUrlTitle } style={ { color: cardTextColor, } } >

                <section
                    style={ { background: colorPaletteControl } }>

                    { imgId ? ( <img id={ `id-${imgId}` } alt={ imgAlt } src={ imgUrl } /> ) : '' }

                    <header
                    className={`course-block--inner ${imgId ? 'has-image' : ''}`}
                    style={ 
                            { 
                                background: hexToRGB(colorPaletteControl ),
                                color: cardTextColor, 
                            } 
                        } >
                        <RichText.Content
                            tagName='h2'
                            value={ cardTitle }
                            className='course-block--title'
                        />
                        <RichText.Content
                            tagName='p'
                            value={ cardDesc }
                            className='course-block--description'
                        />
                    </header>
                </section>

            </a>

        );
    }
});