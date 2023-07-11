import { useRef, useState } from "react";
import { postProduct } from "../api/productAPI";

const initState = {
    title:'',
    content:'',
    writer:'',
    images: []
}


const ProductInput = () => {

    const fileRef = useRef()

    const [board, setBoard] = useState({...initState})

    const handleChange = (e) => {
        board[e.target.name] = e.target.value

        setBoard({...board})
    }

    const handleClickSave = (e) => {

        const formData = new FormData();

        formData.append("title", board.title)
        formData.append("content", board.content)
        formData.append("writer", board.writer)

        console.dir(fileRef.current)

        const arr = fileRef.current.files

        for(let file of arr){
            formData.append("Files", file)
        }

        postProduct(formData)

    }

    const handleClickClear = (e) => {

        fileRef.current.value = ''

    }

    // fileRef로 input에 접근할 수 있음(?)
    return ( 
        <div>
            <h1>Product Input</h1>
            <div>
                <input type='text' name='title' value={board.title} onChange={handleChange}></input>
            </div>
            <div>
                <input type='text' name='content' value={board.content} onChange={handleChange}></input>
            </div>
            <div>
                <input type='text' name='writer' value={board.writer} onChange={handleChange}></input>
            </div>
            <div>
                <input type="file" ref={fileRef} multiple name="images" value={board.images} onChange={handleChange}></input>
            </div>
            <div>
                <button onClick={handleClickSave}>Save</button>
                <button onClick={handleClickClear}>CLEARFILES</button>
            </div>

        </div>
     );
}
 
export default ProductInput;