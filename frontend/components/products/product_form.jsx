import React from 'react'

class ProductForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      product_name: '',
      description: '',
      details: '',
      website: '',
      social: '',
      list_photo: '',
      photos: '',
      video: '',
      around_the_web: '',
    }

    // this.handleFile = this.handleFile.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    debugger;
    const formData = new FormData();
    formData.append('products[product_name]', this.state.product_name)
    formData.append('products[description]', this.state.description)
    formData.append('products[details]', this.state.details)
    formData.append('products[website]', this.state.website)
    formData.append('products[social]', this.state.social)
    formData.append('products[list_photo]', this.state.list_photo)
    formData.append('products[photos]', this.state.photos)
    formData.append('products[video]', this.state.video)
    formData.append('products[around_the_web]', this.state.around_the_web)

    $.ajax({
      method: 'POST',
      url: `/api/users/${this.props.currentUserId}/products`,
      products: formData,
      contentType: false,
      processData: false
    }).then((response) => console.log(response.message));
  }

  handleFile(type) {
    return (event) => {
      event.preventDefault();
      return this.setState({[type]: event.currentTarget.value})
    }
  }

  handleChange(type){
    return (event) => {
      event.preventDefault()
      return this.setState({[type]: event.currentTarget.value})
    }
  }
  // componentDidMount(){
  //
  // }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Product Form</h1>
          <h4>Find a product you like? ESCAPE with it</h4>
          <div>
            <h4>Product Name</h4>
            <input placeholder="Enter Product Name" onChange={this.handleChange('product_name')} value={this.state.product_name} />
          </div>
          <div>
            <h4>Product Description</h4>
            <input placeholder="Enter a brief description" onChange={this.handleChange('description')} value={this.state.description} />
          </div>
          <div>
            <h4>Product Details </h4>
            <input placeholder="Enter additional essential details" onChange={this.handleChange('details')} value={this.state.details}/>
          </div>
          <div>
            <h4>Product website</h4>
            <input placeholder="Enter product website" onChange={this.handleChange('website')} value={this.state.website}/>
          </div>
          <div>
            <h4>Product around the web</h4>
            <input placeholder="Enter articles discussing product" onChange={this.handleChange('around_the_web')} value={this.state.around_the_web}/>
          </div>
          <div>
            <h4>Product Socials</h4>
            <input placeholder="Must be full url ie. www.facebook.com/product-esc" onChange={this.handleChange('social')} value={this.state.social}/>
          </div>
          <div>
            <h4>Product Logo</h4>
            <input type="file" onChange={this.handleFile('list_photo')} value={this.state.list_photo}  />
          </div>
          <div>
            <h4>Product Display Pictures</h4>
            <input type="file" onChange={this.handleFile('photos')} value={this.state.photos} />
          </div>
          <div>
            <h4>Video Dispaly</h4>
            <input type="file" onChange={this.handleFile('video')} value={this.state.video} />
          </div>
          <button onClick={this.handleSubmit}>ESCAPE IT</button>
        </form>
      </div>
    )
  }
}

export default ProductForm;
