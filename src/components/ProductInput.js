import { useRef, useState } from "react";
import { postProduct } from "../api/productAPI";

// 껍데기 생성
const initState = {
    pname : 'Ice Coffee',
    pdesc : 'Coffee',
    price : 4000
}



const ProductInput = () => {

    // 참조값 물기
    const fileRef = useRef()
    
    // 오류 안뜨게 끔 설정
    const [product , setProduct] = useState({...initState})

    // change 함수 생성
    const handleChange = (e) => {
        product[e.target.name] = e.target.value
        setProduct({...product})
    }

    // save 함수 생성
    const handleClickSave = (e) => {
        
        const formData = new FormData();

        // 하나씩 담아줘여함
        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)

        console.dir(fileRef.current)

        const arr = fileRef.current.files
        
        for(let file of arr) {
            formData.append("files", file)
        }

        postProduct(formData)

    }

    // clear 함수 생성
    const handleClickClear = (e) => {
        fileRef.current.value=''
    }

    return ( 
        <div>
            <h1>Product Input</h1>
            <div>
                <input type="text" name="pname" value={product.pname} onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" name="pdesc" value={product.pdesc} onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" name="price" value={product.price} onChange={handleChange}></input>
            </div>
            <div>
                <input type="file" ref={fileRef} multiple name="images" onChange={handleChange}></input>
            </div>
            <div>
                <button onClick={handleClickSave}>Save</button>
                <button onClick={handleClickClear}>CLEARFILES</button>
            </div>
        </div>
     );
}
 
export default ProductInput;