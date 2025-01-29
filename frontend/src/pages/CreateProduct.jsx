import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";

const CreateProduct = () => {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [name, setName] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [email, setEmail] = useState("");

  const categoriesData = [
    { title: "Electronics" },
    { title: "Fashion" },
    { title: "Books" },
    { title: "Home Application" },
  ];

  const handleImageChange = (e) => {
    const file = Array.from(e.target.files);
    setImages((prevImages) => prevImages.concat(file));

    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages((prevImages) => prevImages.concat(imagePreviews));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("tags", tags.trim());
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("email", email);

    images.forEach((image, index) => {
      console.log(`Appending image ${index + 1} :`, image.name);
      formData.append("images[]", image);
    });

    console.log("FormData before sending...");
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    try {
      const response = await axios.post(
        "http://localhost:8080/product/create-product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        alert(`Product ${name} created successfully!`);
        setImages([]);
        setPreviewImages([]);
        setName("");
        setDescription("");
        setCategory("");
        setTags("");
        setPrice("");
        setStock("");
        setEmail("");
      }
    } catch (error) {
      console.error(
        "Error creating product:",
        error.response?.data || error.message
      );

      alert("Failed to create product.Please check the data and try again...");
    }
  };

  return (
    <div className="bg-gray-900 flex justify-center items-center min-h-screen">
    <div className="w-[90%] max-w-[500px] bg-gray-700 rounded-lg p-8 shadow-lg">
        <h1 className="text-center text-3xl text-white mb-6 font-bold">Create Product</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Email <span className="text-red-500">*</span></label>
                <input type="email" className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Product Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Description <span className="text-red-500">*</span></label>
                <textarea className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Category <span className="text-red-500">*</span></label>
                <select className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Choose a category</option>
                    {categoriesData.map((cat) => (
                        <option key={cat.title} value={cat.title}>{cat.title}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Tags</label>
                <input type="text" className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" value={tags} onChange={(e) => setTags(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Price <span className="text-red-500">*</span></label>
                <input type="number" className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Stock <span className="text-red-500">*</span></label>
                <input type="number" className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" value={stock} onChange={(e) => setStock(e.target.value)} required />
            </div>
            <div className="mt-4 mb-4">
            <label className="pb-1 block">
              Upload Images <span className="text-red-500">*</span>
            </label>
            <input
              name="image"
              type="file"
              id="upload"
              className="hidden"
              multiple
              onChange={handleImageChange}
              required
            />
            <label htmlFor="upload" className="cursor-pointer">
              <AiOutlinePlusCircle size={30} color="#555" />
            </label>
            <div className="flex flex-wrap mt-2">
              {previewImages.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  alt="Preview"
                  className="w-[100px] h-[100px] object-cover m-2"
                />
              ))}
            </div>
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Create</button>
          </div>
        </form>
    </div>
</div>
);
};

export default CreateProduct;
