import  {
    get_svg,
} from 'wasm-svg/wasm.js'


export function insert_svg(subject: Element) {
    
    let s = get_svg();
    console.log(s)
    subject.insertAdjacentHTML("afterbegin", s);
}
