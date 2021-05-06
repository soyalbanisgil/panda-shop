import React from 'react';
import { firestore } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/products/products.action';
import './AddProduct.sass';

const AddProductForm = ({ setModalIsOpen, productDetail, addProduct }) => {
  const handleChange = (e) =>
    addProduct({ ...productDetail, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    firestore.collection('products').add(productDetail);
    setModalIsOpen(false);
    alert('Product Added');
    addProduct({
      name: '',
      imageUrl: '',
      category: '',
      price: 0,
      id: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add A Product</h2>
      <p>Fill the form to add a new product</p>
      <div className='form-item'>
        <span className='material-icons'>tag</span>
        <input
          type='text'
          name='id'
          onChange={handleChange}
          required
          placeholder='Id of the product'
        />
      </div>
      <div className='form-item'>
        <span className='material-icons'>inventory 2</span>
        <input
          onChange={handleChange}
          type='text'
          name='name'
          required
          placeholder='Product Name'
        />
      </div>
      <div className='form-item'>
        <span className='material-icons'>image</span>
        <input
          onChange={handleChange}
          type='text'
          name='imageUrl'
          required
          placeholder='Image Url'
        />
      </div>
      <div className='form-item' style={{ paddingBottom: '6%' }}>
        <label htmlFor='category' className='category-items'>
          Category
        </label>
        <select name='category' onChange={handleChange} required>
          <option value='select'>Select Category</option>
          <option value='womens'>Women's</option>
          <option value='mens'>Men's</option>
          <option value='sneakers'>Sneakers</option>
        </select>
      </div>
      <div className='form-item'>
        <span className='material-icons'>paid</span>
        <input
          onChange={handleChange}
          type='number'
          name='price'
          required
          placeholder='Product Price'
        />
      </div>
      <button className='btn' type='submit'>
        Add Product
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  productDetail: state.products.productDetail,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);
