function addElement(divref,reactElem){
    // const newEle=document.createElement(reactElem.type)
    // newEle.setAttribute('href',reactElem.props.href)
    // newEle.setAttribute('target',reactElem.props.target)
    // newEle.innerHTML=reactElem.children
    // divref.appendChild(newEle)



    const newEle=document.createElement(reactElem.type)
    for (const prop in reactElem.props) {
       if(prop === 'children')continue;
        
        newEle.setAttribute(prop,reactElem.props.prop)
        
        
    }
    newEle.innerHTML=reactElem.children
    divref.appendChild(newEle)



}

const reactElem={
    type:'a',
    props:{
        href:'https//google.com',
        target:'manan'
    },
    children:'Hey i am hereee'
}



const divref=document.querySelector("#root")

addElement(divref,reactElem)