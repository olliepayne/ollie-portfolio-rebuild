const useMergeStyle = (defaultStyle, style) => {
  const newStyle = defaultStyle

  if (style) {
    for (var key in style) {
      newStyle[key] = style[key]
    }
  }

  return newStyle
}

export default useMergeStyle