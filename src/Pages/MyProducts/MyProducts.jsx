import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NavbarArtist from '../../components/Navbar/NavbarArtist'
import Sidebar from './Sidebar'
import img1 from '../../assets/MyProducts/Icon Search.png'
import img2 from '../../assets/MyProducts/Rectangle 596.png'
import img3 from '../../assets/MyProducts/Rectangle 596 (1).png'
import img4 from '../../assets/MyProducts/fsd.png'
import img5 from '../../assets/MyProducts/Group 595.png'
import img6 from '../../assets/MyProducts/Group 743.png'
import img7 from '../../assets/MyProducts/dsv.png'
import img8 from '../../assets/MyProducts/fluent_attach-20-regular.png'
import img9 from '../../assets/MyProducts/Group 743sc.png'
import { HiPlus } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi2";
import { RiAttachment2 } from "react-icons/ri";

import { useGetAllArtistProductsQuery } from '../../features/user/artistAPISlice'
import { useAddArtistProductsMutation } from '../../features/user/artistAPISlice'
import { useUpdateArtistProductsMutation } from '../../features/user/artistAPISlice';
import { useDeleteArtistProductMutation } from '../../features/user/artistAPISlice';



// import Products from './Products'

const MyProducts = () => {
    const [deleteProduct] = useDeleteArtistProductMutation();
    const [editMode, setEditMode] = useState(false)
    const [SelectedProductsInfo, setSelectedProductsInfo] = useState()
    const [changedProductsData, setChangedProductsData] = useState({
        id: null,
        data: null
    })

    const backbutton=()=>{
        setcount(count-1)
        setNewArtistProducts(
            {
                productName: "",
                brandName: "",
                category: "",
                productCost: "",
                productImage: "",
                stockQuantity: "",
                description: " ",
                skinType: "",
                preference: "",
                concern: "",
                ingredients: " ",
                use: " ",
                shades: [
                    {
                        shadeName: " ",
                        shadeImage: " "
                    }
                ]
            }
        )
        setEditMode(false)
    }
    
    // it will store artist new product data
    const [newArtistProducts, setNewArtistProducts] = useState(
        {
            productName: "",
            brandName: "",
            category: "",
            productCost: "",
            productImage: "",
            stockQuantity: "",
            description: " ",
            skinType: "",
            preference: "",
            concern: "",
            ingredients: " ",
            use: " ",
            shades: [
                {
                    shadeName: " ",
                    shadeImage: " "
                }
            ]
        });
    const initialData = {
        productName: "",
        brandName: "",
        category: "",
        productCost: "",
        productImage: "",
        stockQuantity: "",
        description: " ",
        skinType: "",
        preference: "",
        concern: "",
        ingredients: " ",
        use: " ",
        shades: [
            {
                shadeName: " ",
                shadeImage: " "
            }
        ]
    }
    const handleinputchange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setNewArtistProducts(prevState => ({
            ...prevState,
            [name]: value
        }));
    };



    // When click on edit Address
    const editProducts = (id) => {
        // set editmode value true.
        setEditMode(true)
        console.log(allArtistProducts.products)
        // it will get selected product details using the ID.
        setcount(count + 1)


        const artistProductsData = allArtistProducts.products
        //   const SelectedProductsInfo = artistProductsData.find(obj => obj._id === id);
        setSelectedProductsInfo(artistProductsData.find(obj => obj._id === id))
        console.log(SelectedProductsInfo)

    }

    // it will run when your form is on edit mode.
    useEffect(() => {
        if (editMode) {
            // it will display your selected address into the form.
            if (SelectedProductsInfo) {
                setNewArtistProducts({ ...SelectedProductsInfo });
                setChangedProductsData((preval) => {
                    return {
                        ...preval,
                        id: SelectedProductsInfo._id
                    }
                })
            }
        }
        else{
            setNewArtistProducts(
                {
                    productName: "",
                    brandName: "",
                    category: "",
                    productCost: "",
                    productImage: "",
                    stockQuantity: "",
                    description: " ",
                    skinType: "",
                    preference: "",
                    concern: "",
                    ingredients: " ",
                    use: " ",
                    shades: [
                        {
                            shadeName: " ",
                            shadeImage: " "
                        }
                    ]
                }
            )
        }


    }, [editMode]);

    const [updateArtistProducts] = useUpdateArtistProductsMutation();
    const [submitEditProducts, setSubmitEditProducts] = useState(false)
    //  this function will update user address
    useEffect(() => {

        if (submitEditProducts) {
            // console.log(changedProductsData)
            updateArtistProducts(changedProductsData)
            setNewArtistProducts(
                {
                    productName: "",
                    brandName: "",
                    category: "",
                    productCost: "",
                    productImage: "",
                    stockQuantity: "",
                    description: " ",
                    skinType: "",
                    preference: "",
                    concern: "",
                    ingredients: " ",
                    use: " ",
                    shades: [
                        {
                            shadeName: " ",
                            shadeImage: " "
                        }
                    ]
                }
            )
        }
        setSubmitEditProducts(false)
    }, [submitEditProducts])



    const handleclickt = async (e) => {
        if (editMode) {
            console.log("form ko edit krne ke baad submit kiya")

            const changedProducts = Object.keys(initialData).reduce((changes, key) => {
                if (newArtistProducts[key] !== SelectedProductsInfo[key]) {
                    changes[key] = newArtistProducts[key];
                }
                return changes;

            }, {});
            console.log("y voh datà h jo edit krne ke baad show ho rha",changedProducts)


            setChangedProductsData((preval) => {
                return {
                    ...preval,
                    data: changedProducts
                }
            })
            setEditMode(false)
            setSubmitEditProducts(true)

        }
        else{
            console.log(newArtistProducts)
            await addNewProducts(newArtistProducts)
        }

        setcount(1)
       





        // useEffect(() => {
        //     if (!editMode) {
        //         console.log('edit mode is false')
        //         setNewArtistProducts(
        //             {
        //                 productName: "",
        //                 brandName: "",
        //                 category: "",
        //                 productCost: "",
        //                 productImage: "",
        //                 stockQuantity: "",
        //                 description: " ",
        //                 skinType: "",
        //                 preference: "",
        //                 concern: "",
        //                 ingredients: " ",
        //                 use: " ",
        //                 shades: [
        //                     {
        //                         shadeName: " ",
        //                         shadeImage: " "
        //                     }
        //                 ]
        //             }
        //         )
        //         // console.log(newArtistProducts)
        //     }
        // }, [editMode])


        // console.log(SelectedProductsInfo)
        // if (e.target.id === 'contt') {
        //     setShowt(!showt)
        //     console.log(newArtistProducts)
        //     // await addNewProducts(newArtistProducts)


        // }

    }





    const [selects, setSelects] = useState("");
    const [artistProduct, setArtistProduct] = useState({
        productCategory: ''
    });


    //addproduct
    const [addNewProducts] = useAddArtistProductsMutation();


    const { data: allArtistProducts, isError, isLoading } = useGetAllArtistProductsQuery()
    if (allArtistProducts) {
        console.log("get all data", allArtistProducts.products)
    }





   


    const [count, setcount] = useState(1)
    const [countcheck, setcountcheck] = useState(0)
    const [showDropDown, setShowDropDown] = useState(false)
    const [show, setShow] = useState(false)
    const [showt, setShowt] = useState(false)
    const [sho, setSho] = useState(false)
    const handleclick = (e) => {
        if (e.target.id === 'cont') {
            setShow(!show)

        }
    }
    


    




    return (
        <>
            {/* <NavbarArtist /> */}
            <div className=' w-full right-0 lg:w-[80%]  font-SulphurPoint flex '>


                <div className=' p-2 lg:p-8 bg-[#F3EFEF] w-full  '>
                    {

                        count === 1 ?
                            //Product 1 page  


                            < div className={`flex flex-col gap-5 `}>
                                <div className=' flex justify-between'>
                                    <div className=' flex  flex-col gap-2'>
                                        <p className=' text-[16px] lg:text-[20px] font-[700]'>My Products</p>
                                        <p className=' text-[#504949] text-[14px] lg:text-[20px] font-[300]'>(Total Products: 46)</p>
                                    </div>
                                    <button onClick={() => { setcount(count + 1) }} className=' lg:text-[#A21D3C] text-[14px] lg:text-[24px] font-[700]  h-fit p-4 lg:px-44 border border-[#A21D3C] lg:py-1 rounded-[12px] bg-[#A21D3C] lg:bg-white text-white'>+ Add Product</button>
                                </div>
                                <div className=' flex gap-1 bg-white p-2 rounded-[12px]'>
                                    <img className=' w-[16px] h-[16px]' src={img1} alt="" />
                                    <input type="text" placeholder='Search...' />
                                </div>
                                <div className=' flex  lg:hidden justify-between '>
                                    <div className=' p-2 flex items-center justify-center  rounded-[12px] bg-[#D66F11] '>
                                        <p className=' text-[16px] font-[400] font-Inter text-white'>All</p>
                                    </div>
                                    <div className=' p-1 flex items-center justify-center  rounded- border text-[#5F5F5F] rounded-[12px] border-[#D66F11] '>
                                        <p className=' text-[16px] font-[400] font-Inter '>Hair</p>
                                    </div>
                                    <div className=' p-1 flex items-center justify-center  rounded- border text-[#5F5F5F] rounded-[12px] border-[#D66F11] '>
                                        <p className=' text-[16px] font-[400] font-Inter '>Makeup</p>
                                    </div>
                                    <div className=' p-1 flex items-center justify-center  rounded- border text-[#5F5F5F] rounded-[12px] border-[#D66F11] '>
                                        <p className=' text-[16px] font-[400] font-Inter '>Skincare</p>
                                    </div>
                                    <div className=' p-1 flex items-center justify-center  rounded- border text-[#5F5F5F] rounded-[12px] border-[#D66F11] '>
                                        <p className=' text-[16px] font-[400] font-Inter '>Nails</p>
                                    </div>
                                </div>
                                <div className=' flex flex-col gap-3'>
                                    {
                                        allArtistProducts && (
                                            <>
                                                {
                                                    allArtistProducts.products.map((val, index) => {
                                                        return (
                                                            <div className=' p-3 flex justify-between bg-white'>
                                                                <div className=' flex gap-2'>
                                                                    <img className=' w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]' src={img2} alt="" />
                                                                    <div>
                                                                        <p className=' text-[#A21D3C] text-[14px] lg:text-[24px] font-[700]'>{val.productName}</p>
                                                                        <p className=' text-[#989898] text-[14px] lg:text-[20px] font-[400]'>{val.category
                                                                        }</p>
                                                                        <p className=' text-[18px] lg:text-[32px] font-[700]'>₹{val.price}/-</p>
                                                                    </div>

                                                                </div>
                                                                <div className=' flex flex-col  justify-between'>
                                                                    <button onClick={() => { editProducts(val._id) }} className='p-2 lg:px-10 py-2 rounded-[8px] text-[14px] lg:text-[20px] font-[400] text-white bg-[#A21D3C]'>
                                                                        Edit
                                                                    </button>
                                                                    <button onClick={() => {deleteProduct(val._id)}} className=' p-2 lg:px-10 py-2 rounded-[8px] text-[14px] lg:text-[20px] font-[400] text-[#504949]  border border-[#504949]'>
                                                                        Delete
                                                                    </button>

                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                    )
                                                }
                                            </>
                                        )
                                    }




                                </div>
                            </div>
                            :
                            count === 2 ?
                                //Product 2 nd Page 

                                <div className={` flex flex-col gap-5`}>
                                    <div className=' flex items-center justify-between'>
                                        <div className=' flex items-center gap-8'>
                                            <HiArrowLeft onClick={backbutton} className='text-[28px] text-[#A21D3C] cursor-pointer' />

                                            {/* <img
                                                onClick={() => {
                                                    setcount(count - 1)

                                                }} className=' w-[24px] h-[24px]' src={img5} alt="" /> */}
                                            <p className=' text-[16px] lg:text-[28px] font-[700]'>Add Product</p>
                                        </div>
                                        <img className=' w-[50px] h-[12px] lg:w-[92px] lg:h-[18px]' src={img6} alt="" />
                                    </div>
                                    <div className='  flex flex-col gap-4  p-5 bg-white'>
                                        <div className=' flex  flex-col gap-2 '>
                                            <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Product Name<span className=' text-[#A21D3C]'>*</span></span></p>
                                            <input
                                                onChange={handleinputchange}
                                                value={newArtistProducts.productName}
                                                name='productName'
                                                className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text" />

                                        </div>
                                        <div className=' flex  flex-col gap-2 '>
                                            <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Brand Name<span className=' text-[#A21D3C]'>*</span></span></p>
                                            <input
                                                onChange={handleinputchange}
                                                value={newArtistProducts.brandName}
                                                name='brandName'
                                                className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text" />
                                        </div>



                                        <div className=' font-SulphurPoint  text-[16px] lg:text-[20px] font-[400] flex flex-col w-[100%] h-full items-center justify-center'>
                                            <div className=' w-full flex justify-between'>
                                                <p>Categeory</p>
                                                <h1>{selects}</h1>
                                            </div>
                                            <select className=' h-10 w-full' value={newArtistProducts.productCategory} name='productCategory' onChange={handleinputchange}>
                                                <option>Not Selected</option>
                                                <option value='Makeup'>Makeup</option>
                                                <option value='Hair'>Hair</option>
                                                <option value='Skincare'>Skincare</option>
                                                <option value='Other'>Other</option>
                                            </select>
                                        </div>




                                        <div className=' flex  flex-col gap-2 '>
                                            <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Product Cost (Rs)<span className=' text-[#A21D3C]'>*</span></span></p>
                                            <div className=' bg-[#fbf3f3] p-3 rounded-[12px] flex gap-2'>
                                                <p className=' text-[16px] lg:text-[24px] font-[400] text-[#989898]'>₹</p>
                                                <input
                                                    onChange={handleinputchange}
                                                    value={newArtistProducts.price}
                                                    name='productCost'
                                                    className=' bg-[#fbf3f3] ' type="text" />
                                            </div>
                                        </div>
                                        <div className=' flex  flex-col gap-2 '>
                                            <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Upload Image<span className=' text-[#A21D3C]'>*</span></span></p>
                                            <div className=' bg-[#fbf3f3] p-3  rounded-[12px] flex  justify-between'>

                                                <input
                                                    onChange={handleinputchange}
                                                    value={newArtistProducts.productImage}
                                                    name='productImage'
                                                    className=' bg-[#fbf3f3] ' type="text" />
                                                <RiAttachment2 className=' text-[24px] lg:text-[30px] text-[#A21D3C]' />
                                                {/* <img className=' lg:w-[30px] lg:h-[30px]  w-[24px] h-[24px]' src={img8} alt="" /> */}
                                            </div>
                                        </div>
                                        <div className=' flex  flex-col gap-2 '>
                                            <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Stock Quantity<span className=' text-[#A21D3C]'>*</span></span></p>
                                            <input
                                                onChange={handleinputchange}
                                                value={newArtistProducts.stockQuantity}
                                                name='stockQuantity'
                                                className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text" />
                                        </div>

                                    </div>
                                    <div className=' flex justify-between gap-2 lg:gap-10  px-2 lg:px-10'>
                                        <button className=' text-[#504949] border text-[16px] font-[700] lg:text-[24px]  rounded-[12px] border-[#504949] p-2 w-[50%] flex items-center justify-center '>
                                            Cancel
                                        </button>
                                        <button id='cont' onClick={() => { setcount(count + 1) }} className=' text-white bg-[#A21D3C] text-[16px] font-[700] lg:text-[24px]  rounded-[12px]  p-2 w-[50%] flex items-center justify-center '>
                                            Next
                                        </button>
                                    </div>
                                </div>
                                :
                                count === 3 ?
                                    //3 rd product page 
                                    <div className={` flex flex-col gap-5 `}>
                                        <div className=' flex items-center justify-between'>
                                            <div className=' flex items-center gap-8'>
                                                <HiArrowLeft onClick={() => {
                                                    setcount(count - 1)

                                                }} className='text-[28px] text-[#A21D3C] hover:cursor-pointer' />
                                                <p className=' text-[16px] lg:text-[28px] font-[700]'>Add Product</p>
                                            </div>
                                            <img className=' w-[50px] h-[12px] lg:w-[92px] lg:h-[18px]' src={img7} alt="" />
                                        </div>
                                        <div className='  flex flex-col gap-4  p-5 bg-white'>
                                            <div className=' flex  flex-col gap-2 '>
                                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Description<span className=' text-[#A21D3C]'>*</span></span></p>
                                                <input
                                                    onChange={handleinputchange}
                                                    value={newArtistProducts.description}
                                                    name='description'
                                                    className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text" />
                                            </div>
                                            <div className=' flex  flex-col gap-2 '>
                                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Skin type</span></p>
                                                <input
                                                    onChange={handleinputchange}
                                                    value={newArtistProducts.skinType}
                                                    name='skinType'
                                                    className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text" />
                                            </div>

                                            <div className=' flex  flex-col gap-2 '>
                                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Preference</span></p>
                                                <input
                                                    onChange={handleinputchange}
                                                    value={newArtistProducts.preference}
                                                    name='preference'
                                                    className=' bg-[#fbf3f3] p-4 ' type="text" />
                                            </div>
                                            <div className=' flex  flex-col gap-2 '>
                                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Concern</span></p>
                                                <input
                                                    onChange={handleinputchange}
                                                    value={newArtistProducts.concern}
                                                    name='concern'
                                                    className=' bg-[#fbf3f3] p-4 ' type="text" />
                                            </div>
                                            <div className=' flex  flex-col gap-2 '>
                                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Product Ingredients </span></p>
                                                <input
                                                    onChange={handleinputchange}
                                                    value={newArtistProducts.ingredients}
                                                    name='ingredients'
                                                    className=' bg-[#fbf3f3] p-4 rounded-[12px]' placeholder='Add details about the components used in the product' type="text" />
                                            </div>
                                            <div className=' flex  flex-col gap-2 '>
                                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>How to use </span></p>
                                                <input
                                                    onChange={handleinputchange}
                                                    value={newArtistProducts.use}
                                                    name='use'
                                                    className=' bg-[#fbf3f3] p-4 rounded-[12px]' placeholder='describe proper application/usage of the product' type="text" />
                                            </div>

                                        </div>
                                        <div className=' flex justify-between gap-2 lg:gap-10  px-2 lg:px-10'>
                                            <button className=' text-[#504949] border text-[16px] font-[700] lg:text-[24px]  rounded-[12px] border-[#504949] p-2 w-[50%] flex items-center justify-center '>
                                                Cancel
                                            </button>
                                            <button id='contt' onClick={() => {
                                                setcount(count + 1)

                                            }} className=' text-white bg-[#A21D3C] text-[16px] font-[700] lg:text-[24px]  rounded-[12px]  p-2 w-[50%] flex items-center justify-center '>
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                    :
                                    count === 4 ?
                                        //4 th page 
                                        <div className={` flex flex-col gap-5 `}>
                                            <div className=' flex items-center justify-between'>
                                                <div className=' flex items-center gap-8'>
                                                    <img onClick={() => {
                                                        setcount(count - 1)

                                                    }} className=' w-[24px] h-[24px]' src={img5} alt="" />
                                                    <p className=' text-[16px] lg:text-[28px] font-[700]'>Add Product</p>
                                                </div>
                                                <img className=' w-[50px] h-[12px] lg:w-[92px] lg:h-[18px]' src={img9} alt="" />
                                            </div>
                                            <div className=' bg-white rounded-[12px]  p-8'>
                                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Does the product come in multiple shades?<span className=' text-[#A21D3C]'>*</span></span></p>
                                                <div onClick={() => { setcountcheck(1) }} className=' mt-2 flex gap-2'>
                                                    <input
                                                        id='Yes' name='shade' type="radio" />
                                                    <label for='Yes' className=' text-[16px] lg:text-[20px] font-[400]'>Yes</label>

                                                </div>
                                                <div onClick={() => { setcountcheck(0) }} className='  mt-2 flex gap-2'>
                                                    <input id='No' name='shade' type="radio" />
                                                    <label for='No' className=' text-[16px] lg:text-[20px] font-[400]'>No</label >

                                                </div>
                                                {
                                                    countcheck === 1 ?
                                                        <div className={`  mt-4 flex flex-col gap-3`}>
                                                            <div className=' flex  flex-col gap-2 '>
                                                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Shade Name<span className=' text-[#A21D3C]'>*</span></span></p>
                                                                <input
                                                                    onChange={handleinputchange}
                                                                    value={newArtistProducts.shades.shadeName}
                                                                    name='shades.shadeName'
                                                                    className=' bg-[#fbf3f3] p-4 rounded-[12px]' type="text" />
                                                            </div>
                                                            <div className=' flex  flex-col gap-2 '>
                                                                <p><span className=' text-[16px] lg:text-[20px] font-[400]'>Upload Shade Image</span></p>
                                                                <div className=' bg-[#fbf3f3] p-3  rounded-[12px] flex  justify-between'>

                                                                    <input
                                                                        onChange={handleinputchange}
                                                                        value={newArtistProducts.shades.shadeImage}
                                                                        name='shadeImage'
                                                                        className=' bg-[#fbf3f3] ' type="text" />
                                                                    <RiAttachment2 className=' text-[24px] lg:text-[30px] text-[#A21D3C] hover:cursor-pointer' />
                                                                </div>

                                                            </div>
                                                            <button className='  text-white bg-[#A21D3C] text-[12px] font-[700] lg:text-[18px]  rounded-[12px]  p-2  flex items-center justify-center '>
                                                                + Add Shade
                                                            </button>
                                                        </div>
                                                        :
                                                        null
                                                }



                                            </div>
                                            <div className=' flex justify-between gap-2 lg:gap-10  px-2 lg:px-10'>
                                                <button className=' text-[#504949] border text-[16px] font-[700] lg:text-[24px]  rounded-[12px] border-[#504949] p-2 w-[50%] flex bg-white items-center justify-center '>
                                                    Cancel
                                                </button>
                                                <button id='contt' onClick={handleclickt} className=' text-white bg-[#A21D3C] text-[16px] font-[700] lg:text-[24px]  rounded-[12px]  p-2 w-[50%] flex items-center justify-center '>
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                        :
                                        null

                    }

                </div>


            </div >

        </>
    )
}

export default MyProducts