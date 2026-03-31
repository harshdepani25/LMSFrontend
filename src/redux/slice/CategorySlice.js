import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utility/url";
import { axiosinstance } from "../../utility/axiosIntersepotr";


const initialState = {
    isloading: false,
    category: [],
    error: null
}
console.log(initialState);

export const addCategory = createAsyncThunk(
    'category/addCategory',
    async (data) => {
        try {

            console.log("Data: ", data);

            const formData = new FormData();

            formData.append("name", data.name)
            formData.append("desciption", data.desciption)
            formData.append("category_img", data.category_img)

            const response = await axiosinstance.post("category/addcategory", formData);
            console.log(response.data.data);

            return response.data.data;
        } catch (error) {
            console.log(error);

        }

    }
)

export const getCategory = createAsyncThunk(
    'category/getCategory',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axiosinstance.get("category/allcatgroy");
            console.log(response);

            const { data } = response;
            console.log(data.data);

            return data.data;

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const updateCategroy = createAsyncThunk(
    'category/updateCategroy',
    async (data) => {
        try {
            console.log("updated Data: ", data);

            const formData = new FormData();

            formData.append("name", data.name)
            formData.append("desciption", data.desciption)
            formData.append("category_img", data.category_img)

            const response = await axiosinstance.put(`category/updatecategory/${data._id}`, formData);
            console.log(response);

            return response.data.data;
        } catch (error) {
            console.log(error);
        }

    }   
)

export const deletCategroy = createAsyncThunk(
    'category/deletCategroy',
    async (_id) => {
        try {
            console.log("updated Data: ", _id);
            const response = await axiosinstance.delete(`category/deletecategory/${_id}`);
            console.log(response);

            return _id
        } catch (error) {
            console.log(error);
        }

    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCategory.pending, (state, action) => {
            state.isloading = true
        })

        builder.addCase(getCategory.fulfilled, (state, action) => {
            state.isloading = false
            state.category = action.payload
        })

        builder.addCase(getCategory.rejected, (state, action) => {
           state.isloading = false
            state.category = []
            state.error= action.payload
        })

         builder.addCase(addCategory.fulfilled, (state, action) => {
            state.category.push(action.payload) 
        })

        builder.addCase(deletCategroy.fulfilled, (state, action) => {
            state.category = state.category?.filter((v) => v._id !== action.payload);
        })

        builder.addCase(updateCategroy.fulfilled, (state, action) => {
            console.log(state.category);

            const Index = state.category?.findIndex((v) => v._id === action.payload._id);
        
            console.log("category INDEX:",Index);

            state.category[Index] = action.payload;
        })        
    }
})


export default categorySlice.reducer