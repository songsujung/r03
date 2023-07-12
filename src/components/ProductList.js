import { useEffect, useState } from "react";
import { getList } from "../api/productAPI";

// PageResponseDTO
const initState = {
    dtoList : [],
    end : 0,
    start : 0,
    next : false,
    prev : false,
    pageNums : [], // 배열로 해야 반복문 처리 편리  
    page : 0,
    size : 0,
    requestDTO : null
  }

const ProductList = () => {

    const [listData, setListData] = useState(initState)

    useEffect(() => {

        getList().then(data => {
            console.log(data)
            setListData(data)
        },[])

    },[])

    return (
        <div>
            <ul>
                {listData.dtoList.map(dto =>
                    <li key={dto.pno}>
                        {dto.pname} - {dto.price}
                        <div>
                            <img src={`http://localhost:8080/view/s_${dto.fname}`} alt='ddd'></img>
                        </div>
                    </li>)}
            </ul>
        </div>
    );

}
 
export default ProductList;