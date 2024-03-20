import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { useNavigate } from "react-router-dom";


export const fetchApi = createAsyncThunk("api/fetchApiData", async (message) => {
  const response = await axios.get(
    "https://65f420d2f54db27bc0208e7f.mockapi.io/productdata"
  );
  const data = await response.data
  console.log(message);
  // console.log(data,'slice');
  return data;
 
});

export const postApi = createAsyncThunk("api/postApi", async (productData) => {
  const response = await axios.post(
    "https://65f420d2f54db27bc0208e7f.mockapi.io/productdata",
    productData
  );
  return response.data;
});

export const deleteProduct = createAsyncThunk(
  "api/deleteProduct",
  async (id) => {
    // const nav = useNavigate();
    await axios.delete(
      `https://65f420d2f54db27bc0208e7f.mockapi.io/productdata/${id}`
      
    );
    // nav('/displayproducts')
    return id;
  }
);

export const updateProduct = createAsyncThunk(
  "api/updateProduct",
  async (pro) => {
    const response = await axios.put(
      `https://65f420d2f54db27bc0208e7f.mockapi.io/productdata/${pro.id}`,
      pro
    );
    return response.data;
  }
);

const initialState = {
  product: [],
  loading: "idle",
  error: null,
};
// console.log(initialState.product);
export const productSlice = createSlice({
  name: "api",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.loading = "idle";
        state.product = action.payload;
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.product = state.product.filter(
          (prod) => prod.id !== action.payload
        );
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        state.product = state.product.map((prod) =>
          prod.id === updatedProduct.id ? updatedProduct : prod
        );
      });
  },
});

export const selectApiData = (state) => state.api.data;
export default productSlice.reducer;
