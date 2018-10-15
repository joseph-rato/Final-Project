import React from 'react'

class ProductForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      product_name: '',
      description: '',
      details: '',
      website: '',
      socials: '',
      logo: null,
      display_pictures: null,
      video: null,
      around_the_web: '',
    }
    this.handleFile = this.handleFile.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    const form = Object.assign({}, this.state)
    return this.props.createProduct(form);
  }

  handleFile(e) {
    e.preventDefault();
    this.setState()
  }

  handleChange(type){
    return (event) => {
      event.preventDefault()
      return this.setState([type]: event.target.value)
    }
  }
  // componentDidMount(){
  //
  // }

  render(){
    // debugger;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        </form>
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
          <input placeholder="Must be full url ie. www.facebook.com/product-esc" onChange={this.handleChange('socials')} value={this.state.socials}/>
        </div>
        <div>
          <h4>Product Logo</h4>
          <input type="file" onChange={this.changeFile} value={this.state.logo}  />
        </div>
        <div>
          <h4>Product Display Pictures</h4>
          <input type="file" onChange={this.changeFile} value={this.state.display_pictures} />
        </div>
        <div>
          <h4>Video Dispaly</h4>
          <input type="file" onChange={this.changeFile} value={this.state.video} />
        </div>
        <button onClick={this.handleSubmit}>ESCAPE IT</button>
      </div>
    )
  }
}

export default ProductForm;
