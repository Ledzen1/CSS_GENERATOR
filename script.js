let widthRange = document.getElementById('widthRange')
let heightRange = document.getElementById('heightRange')
let box = document.getElementById('box')
let outputCode = document.getElementById('outputCode')
let btnCopy = document.getElementById('btnCopy')
let widthInput = document.getElementById('widthInput')
let heightInput = document.getElementById('heightInput')

widthRange.addEventListener('input', () => {
    box.style.width = `${widthRange.value}px`
    updateOutputCode()
    widthInput.value = widthRange.value
})

heightRange.addEventListener('input', () => {
    box.style.height = `${heightRange.value}px`
    updateOutputCode()
    heightInput.value = heightRange.value
})

widthInput.addEventListener('input', () => {
    box.style.width = `${widthInput.value}px`
    updateOutputCode()
    widthRange.value = widthInput.value
})

heightInput.addEventListener('input', () => {
    box.style.height = `${heightInput.value}px`
    updateOutputCode()
    heightRange.value = heightInput.value
})

function updateOutputCode() {
    const width = widthRange.value
    const height = heightRange.value
    outputCode.innerHTML = `width: ${width}px;  height: ${height}px;`
}

let rangeSizeR = document.getElementById('rangeSizeR')
let rangeSizeG = document.getElementById('rangeSizeG')
let rangeSizeB = document.getElementById('rangeSizeB')

function changeColor() {
    let r = rangeSizeR.value
    let g = rangeSizeG.value
    let b = rangeSizeB.value
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    rgbCodeShow(r, g, b)
}

rangeSizeR.addEventListener('input', changeColor)
rangeSizeG.addEventListener('input', changeColor)
rangeSizeB.addEventListener('input', changeColor)

let valueR = document.getElementById('valueR')
let valueG = document.getElementById('valueG')
let valueB = document.getElementById('valueB')

rangeSizeR.addEventListener('input', () => {
    valueR.innerHTML = rangeSizeR.value
})
rangeSizeG.addEventListener('input', () => {
    valueG.innerHTML = rangeSizeG.value
})
rangeSizeB.addEventListener('input', () => {
    valueB.innerHTML = rangeSizeB.value
})

function rgbCodeShow(r, g, b) {
    outputCode.innerText = `background-color: rgb(${r}, ${g}, ${b});`
}


let topLeftInput = document.getElementById('topLeftInput')
let topRightInput = document.getElementById('topRightInput')
let bottomLeftInput = document.getElementById('bottomLeftInput')
let bottomRightInput = document.getElementById('bottomRightInput')

function changeRadius() {
    let tL = topLeftInput.value
    let tR = topRightInput.value
    let bL = bottomLeftInput.value
    let bR = bottomRightInput.value
    box.style.borderRadius = `${tL}px ${tR}px ${bL}px ${bR}px`
    changeRadiusShow(tL, tR, bL, bR)
}

topLeftInput.addEventListener('input', changeRadius)
topRightInput.addEventListener('input', changeRadius)
bottomLeftInput.addEventListener('input', changeRadius)
bottomRightInput.addEventListener('input', changeRadius)

function changeRadiusShow(tL, tR, bL, bR) {
    outputCode.innerText = `border-radius: ${tL}px ${tR}px ${bL}px ${bR}px;`
}



let boxContainer = document.querySelector('.box-container')

function toggleAccordion() {
    boxContainer.style.display = (boxContainer.style.display === 'none') ? 'flex' : 'none'
    containerflexbox.style.display = (containerflexbox.style.display === 'flex') ? 'none' : 'flex'
}


let containerflexbox = document.querySelector('.container-flexbox')



let choiseForFlexDisplay = document.getElementById('choiseForFlexDisplay')
function flexlexDisplay() {

    let flexval = document.getElementById('flex-val').value
    let inlineFlexval = document.getElementById('inlineFlex-val').value
    if (choiseForFlexDisplay.value === 'flex') {
        containerflexbox.style.display = flexval
    } else if (choiseForFlexDisplay.value === 'inline-flex') {
        containerflexbox.style.display = inlineFlexval
    }
    changeFlexDisplayShow(flexval, inlineFlexval)
}

choiseForFlexDisplay.addEventListener('change', flexlexDisplay)
function changeFlexDisplayShow(flexval, inlineFlexval) {
    outputCode.value = `.flexbox-container {
    display: ${choiseForFlexDisplay.value === 'flex' ? flexval : inlineFlexval};
}`
}



let choiseForFlexDirection = document.getElementById('choiseForFlexDirection')
function flexDirection() {
    let rowval = document.getElementById('row-val').value
    let rowreverseval = document.getElementById('row-reverse-val').value
    let columnval = document.getElementById('column-val').value
    let columnreverseval = document.getElementById('column-reverse-val').value

    if (choiseForFlexDirection.value === 'row') {
        containerflexbox.style.flexDirection = rowval
    } else if (choiseForFlexDirection.value === 'row-reverse') {
        containerflexbox.style.flexDirection = rowreverseval
    } else if (choiseForFlexDirection.value === 'column') {
        containerflexbox.style.flexDirection = columnval
    } else if (choiseForFlexDirection.value === 'column-reverse') {
        containerflexbox.style.flexDirection = columnreverseval
    }
    // changeFlexDirectionShow(rowval, rowreverseval, columnval, columnreverseval)
}

choiseForFlexDirection.addEventListener('change', flexDirection)

function changeFlexDirectionShow() {


    outputCode.value = `.flexbox-container {


    }`
}

let choiseForFlexWrap = document.getElementById('choiseForFlexWrap')
function flexWrap() {
    let wrapval = document.getElementById('wrap-val').value
    let nowrapval = document.getElementById('nowrap-val').value
    let wrapreverseval = document.getElementById('wrap-reverse-val').value

    if (choiseForFlexWrap.value === 'wrap') {
        containerflexbox.style.flexWrap = wrapval
    } else if (choiseForFlexWrap.value === 'nowrap') {
        containerflexbox.style.flexWrap = nowrapval
    } else if (choiseForFlexWrap.value === 'wrap-reverse') {
        containerflexbox.style.flexWrap = wrapreverseval
    }
}
choiseForFlexWrap.addEventListener('change', flexWrap)

function changeFlexWrapShow() {

}

let choiseForJustifyContent = document.getElementById('choiseForJustifyContent')
function flexJustifyContent() {
    let startval = document.getElementById('start-val').value
    let endval = document.getElementById('end-val').value
    let centerval = document.getElementById('center-val').value
    let spacebetweenval = document.getElementById('space-between-val').value
    let spacearoundval = document.getElementById('space-around-val').value

    if (choiseForJustifyContent.value === 'start') {
        containerflexbox.style.justifyContent = startval
    } else if (choiseForJustifyContent.value === 'end') {
        containerflexbox.style.justifyContent = endval
    } else if (choiseForJustifyContent.value === 'center') {
        containerflexbox.style.justifyContent = centerval
    } else if (choiseForJustifyContent.value === 'space-between') {
        containerflexbox.style.justifyContent = spacebetweenval
    } else if (choiseForJustifyContent.value === 'space-around') {
        containerflexbox.style.justifyContent = spacearoundval
    }
}
choiseForJustifyContent.addEventListener('change', flexJustifyContent)

function changeFlexJustifyContentShow() {

}

let choiseForAlignItems = document.getElementById('choiseForAlignItems')
function flexAlinItems() {
    let alignstartval = document.getElementById('align-start-val').value
    let alignendval = document.getElementById('align-end-val').value
    let aligncenterval = document.getElementById('align-center-val').value
    let alignbaselineval = document.getElementById('align-baseline-val').value
    let alignstretchval = document.getElementById('align-stretch-val').value

    if (choiseForAlignItems.value === 'start') {
        containerflexbox.style.alignItems = alignstartval
    } else if (choiseForAlignItems.value === 'end') {
        containerflexbox.style.alignItems = alignendval
    } else if (choiseForAlignItems.value === 'center') {
        containerflexbox.style.alignItems = aligncenterval
    } else if (choiseForAlignItems.value === 'baseline') {
        containerflexbox.style.alignItems = alignbaselineval
    } else if (choiseForAlignItems.value === 'stretch') {
        containerflexbox.style.alignItems = alignstretchval
    }
}
choiseForAlignItems.addEventListener('change', flexAlinItems)

function changeflexAlinShow() {

}

let choiseForAlignContent = document.getElementById('choiseForAlignContent')
function flexAlinContent() {
    let contentstartval = document.getElementById('content-start-val').value
    let contentendval = document.getElementById('content-end-val').value
    let contentspacebetweenval = document.getElementById('content-spacebetween-val').value
    let contentspacearound = document.getElementById('content-spacearound').value
    let contentstretchval = document.getElementById('content-stretch-val').value

    if (choiseForAlignContent.value === 'start') {
        containerflexbox.style.alignContent = contentstartval
    } else if (choiseForAlignContent.value === 'end') {
        containerflexbox.style.alignContent = contentendval
    } else if (choiseForAlignContent.value === 'space-between') {
        containerflexbox.style.alignContent = contentspacebetweenval
    } else if (choiseForAlignContent.value === 'space-around') {
        containerflexbox.style.alignContent = contentspacearound
    } else if (choiseForAlignContent.value === 'stretch') {
        containerflexbox.style.alignContent = contentstretchval
    }
}
choiseForAlignContent.addEventListener('change', flexAlinContent)


let choiseForShadowInset = document.getElementById('choiseForShadowInset')


function updateShadow() {
    let hL = document.getElementById('horizontalLength').value
    let vL = document.getElementById('verticalLength').value
    let bR = document.getElementById('blurRadius').value
    let s = document.getElementById('spread').value
    let hexColor = document.getElementById('head').value
    let { rB, gB, bB } = hexToRgb(hexColor)

    let boxShadowValue = ''

    if (choiseForShadowInset.value === 'inset') {
        boxShadowValue = `inset ${hL}px ${vL}px ${bR}px ${s}px rgba(${rB}, ${gB}, ${bB})`
    } else {
        boxShadowValue = `${hL}px ${vL}px ${bR}px ${s}px rgba(${rB}, ${gB}, ${bB})`
    }

    box.style.boxShadow = boxShadowValue


    outputCode.textContent = `box-shadow: ${boxShadowValue};`
}

function hexToRgb(hex) {
    hex = hex.replace(/^#/, '')
    let bigint = parseInt(hex, 16)
    let rB = (bigint >> 16) & 255
    let gB = (bigint >> 8) & 255
    let bB = bigint & 255
    return { rB, gB, bB }
}

choiseForShadowInset.addEventListener('change', updateShadow)
document.getElementById('horizontalLength').addEventListener('input', updateShadow)
document.getElementById('verticalLength').addEventListener('input', updateShadow)
document.getElementById('blurRadius').addEventListener('input', updateShadow)
document.getElementById('spread').addEventListener('input', updateShadow)
document.getElementById('head').addEventListener('input', updateShadow)


