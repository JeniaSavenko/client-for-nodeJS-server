import styled from 'styled-components/native';

export const separateLiteralToProps = (strings, ...values) => ({ strings, values });

export const combineProps = (...values) => values.reduce((a, b) => ({
  values: a.values.concat(b.values),
  strings: a.strings.concat(b.strings),
}), { strings: [], values: [] });

export const applyProps = (fn, props) => fn(props.strings, ...props.values);

const widthProps = separateLiteralToProps`
${({ width }) => (width === true ? 'width: 100%' : width && `width: ${(width)};`)}
${({ height }) => (height === true ? 'height: 100%' : `height: ${(height)};`)}
${({ minHeight }) => minHeight && `min-height: ${(minHeight)};`}
${({ minWidth }) => minWidth && `min-width: ${(minWidth)};`}
${({ maxHeight }) => maxHeight && `max-height: ${(maxHeight)};`}
${({ maxWidth }) => maxWidth && `max-width: ${(maxWidth)};`}
`;

const flexProps = separateLiteralToProps`
${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
${({ flex }) => flex && `flex: ${flex};`}
${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
${({ justify }) => justify && `justify-content: ${justify};`}
${({ align }) => align && `align-items: ${align};`}
${({ color }) => color && `background-color: ${color};`}
`;

const paddingProps = separateLiteralToProps`
${({ pv }) => pv && `padding-vertical: ${(pv)};`}
${({ ph }) => ph && `padding-horizontal: ${(ph)};`}
${({ pt }) => pt && `padding-top: ${(pt)};`}
${({ pr }) => pr && `padding-right: ${(pr)};`}
${({ pb }) => pb && `padding-bottom: ${(pb)};`}
${({ pl }) => pl && `padding-left: ${(pl)};`}
${({ padding }) => padding && `padding: ${(padding)};`}
${({ p }) => p && `padding: ${(p)};`}
`;

const marginProps = separateLiteralToProps`
${({ mv }) => mv && `margin-vertical: ${(mv)};`}
${({ mh }) => mh && `margin-horizontal: ${(mh)};`}
${({ mt }) => mt && `margin-top: ${(mt)};`}
${({ mr }) => mr && `margin-right: ${(mr)};`}
${({ mb }) => mb && `margin-bottom: ${(mb)};`}
${({ ml }) => ml && `margin-left: ${(ml)};`}
${({ margin }) => margin && `margin: ${(margin)};`}
`;

const borderProps = separateLiteralToProps`
${({ corners }) => corners && `border-radius: ${corners};`}
`;

const transformProps = separateLiteralToProps`
${({ scale }) => scale && `transform: scale(${(scale)});`}
${({ rotate }) => rotate && `transform: rotate(${(rotate)}deg);`}
`;


const positionProps = separateLiteralToProps`
${({ zIndex }) => zIndex && `z-index: ${(zIndex)};`}
${({ top }) => (top !== undefined) && `top: ${(top)};`}
${({ left }) => (left !== undefined) && `left: ${(left)};`}
${({ right }) => (right !== undefined) && `right: ${(right)};`}
${({ bottom }) => (bottom !== undefined) && `bottom: ${(bottom)};`}
`;

const superProps = separateLiteralToProps`
${({ relative }) => relative && 'position: relative;'}
${({ absolute }) => absolute && 'position: absolute;'}
${({ centred }) => centred && 'justify-content: center; align-items: center;'}
${({ js }) => js && 'justify-content: flex-start;'}
${({ jc }) => jc && 'justify-content: center;'}
${({ je }) => je && 'justify-content: flex-end;'}
${({ jb }) => jb && 'justify-content: space-between;'}
${({ as }) => as && 'align-items: flex-start;'}
${({ ac }) => ac && 'align-items: center;'}
${({ ae }) => ae && 'align-items: flex-end;'}
${({ centred }) => centred && 'justify-content: center; align-items: center;'}
${({ expand, full, filled }) => (expand || full || filled) && 'width: 100%; height: 100%'}
${({ flexed }) => flexed && 'flex: 1'}
${({ row }) => row && 'flex-direction: row'}
${({ color }) => color && `background-color: ${color};`}
${({ white }) => white && 'background-color: white'}
${({ hidden }) => hidden && 'overflow: hidden;'}
${({ black }) => black && 'background-color: black'}
${({ red }) => red && 'background-color: red'}
${({ blue }) => blue && 'background-color: blue'}
${({ green }) => green && 'background-color: green'}
${({ yellow }) => yellow && 'background-color: yellow'}
${({ oWhite }) => oWhite && 'background-color: white; opacity: 0.5'}
${({ oBlack }) => oBlack && 'background-color: black; opacity: 0.5'}
${({ oRed }) => oRed && 'background-color: red; opacity: 0.5'}
${({ oBlue }) => oBlue && 'background-color: blue; opacity: 0.5'}
${({ oGreen }) => oGreen && 'background-color: green; opacity: 0.5'}
${({ oYellow }) => oYellow && 'background-color: yellow; opacity: 0.5'}
`;

const blockProps = combineProps(
  widthProps,
  flexProps,
  borderProps,
  transformProps,
  paddingProps,
  marginProps,
  positionProps,
  superProps,
);

const Block = applyProps(styled.View, blockProps);

export default Block;
