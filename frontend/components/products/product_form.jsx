import React from 'react'
import {withRouter} from 'react-router-dom'

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
      video_link: '',
      around_the_web: '',
      product_id: null,
      clicked: {},
    }

    this.handleFile = this.handleFile.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
    this.handleTagChange = this.handleTagChange.bind(this)
    this.addTag = this.addTag.bind(this)
    this.removeTag = this.removeTag.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    if ((this.state.photos === '') && (this.state.list_photo === '')) {
      return this.props.sendError(['You need to upload a picture logo', 'You need to upload at least one display picture']);
    } else if (this.state.list_photo === '') {
      return this.props.sendError(['You need to upload a picture logo']);
    } else if (this.state.photos === '')  {
      return this.props.sendError(['You need to upload at least one display picture']);
    }
    let tagKeys = Object.keys(this.state.clicked)
    let prodTags = Object.assign({}, {tags: {tags: tagKeys}})
    const formData = new FormData();
    formData.append('product[product_name]', this.state.product_name)
    formData.append('product[description]', this.state.description)
    formData.append('product[details]', this.state.details)
    formData.append('product[website]', this.state.website)
    formData.append('product[social]', this.state.social)
    formData.append('product[list_photo]', this.state.list_photo)
    formData.append('product[photos]', this.state.photos)
    formData.append('product[video_link]', this.state.video_link)
    formData.append('product[around_the_web]', this.state.around_the_web)
    return this.props.sendForm(formData, this.props.currentUserId).then( (serverProduct) => {
      return this.props.sendTagForm(prodTags, this.props.currentUserId, serverProduct.product.id).then((serverTag) => {
        this.props.history.push(`/`)
        this.props.openModal('product', serverProduct.product);
      })
    })
  }

  handleFile(type) {

    return (event) => {
      event.preventDefault();
      return this.setState({[type]: event.currentTarget.files[0]})
    }
  }
  removeTag(tag){
    let tagsObj = Object.assign({}, this.state.clicked)
    delete tagsObj[`${tag}`]
    return this.setState({clicked: tagsObj})
  }

  addTag(tag){
    let tagsObj = Object.assign({}, this.state.clicked)
    tagsObj[`${tag}`] = 1
    return this.setState({clicked: tagsObj})
  }

  handleTagChange(tag) {
    return (event) => {
      event.preventDefault();
      if (this.state.clicked.hasOwnProperty(tag)){
        
        this.removeTag(tag)
      } else {
        
        this.addTag(tag)
      }
    }
  }

  handleChange(type){
    return (event) => {
      event.preventDefault()
      return this.setState({[type]: event.currentTarget.value})
    }
  }


  render(){
    const tagsArr = ['Tech', 'Education', 'Music', 'AI', 'Productivity']
    return(
      <div className="product-form-page">
        <form className="product-form-content" onSubmit={this.handleSubmit}>
          <h1 className="product-form-title" >Post A New Product</h1>
          <h4 className="product-form-des">Find a product you like? ESCAPE with it</h4>
          <div className="product-form-input-div">
            <h4 className="product-form-input-des">Product Name</h4>
            <input className="product-form-input-str product-form-name-input" type="text" placeholder="Enter Product Name" onChange={this.handleChange('product_name')} value={this.state.product_name} />
          </div>
          <div className="product-form-input-div">
            <h4 className="product-form-input-des">Product Description</h4>
            <input className="product-form-input-str product-form-desciption-input" type="text" placeholder="Enter a brief description" onChange={this.handleChange('description')} value={this.state.description} />
          </div>
          <div className="product-form-input-div">
            <h4 className="product-form-input-des">Product website</h4>
            <input className="product-form-input-str product-form-website-input" type="url" placeholder="Must be full url ie. www.product-esc.com" onChange={this.handleChange('website')} value={this.state.website}/>
          </div>
          <div className="product-form-input-div">
            <h4 className="product-form-input-des">Product Around The Web</h4>
            <input className="product-form-input-str product-form-arw-input" type="text" placeholder="ie. www.newyorktimes.com/product-esc" onChange={this.handleChange('around_the_web')} value={this.state.around_the_web}/>
          </div>
          <div className="product-form-input-div">
            <h4 className="product-form-input-des">Product Socials</h4>
            <input className="product-form-input-str product-form-socials-input" type="text" placeholder="ie. www.facebook.com/product-esc" onChange={this.handleChange('social')} value={this.state.social}/>
          </div>
          <div className="product-form-input-div">
            <h4 className="product-form-input-des">Product Video</h4>
            <input className="product-form-input-str product-form-video-input" type="url" placeholder="ie. www.youtube.com/product-esc" onChange={this.handleChange('video_link')} value={this.state.video_link} />
          </div>
          <div className="product-form-input-div">
            <h4 className="product-form-input-des">Product Details </h4>
            <textarea className="product-form-text-details" rows="7" cols="64" placeholder="Enter additional essential details" onChange={this.handleChange('details')} value={this.state.details}></textarea>
          </div>
          <div className="product-form-input-div">
            <h4 className="product-form-input-des">Product Tags</h4>
            <div className="product-form-tag-input-side">
              <label className="product-form-select-tag-desc">Click all that Apply</label>
              <span className="product-form-tag-options">

              {
                tagsArr.map((tagger)=>{
                  
                  if (this.state.clicked[`${tagger}`]){
                    
                    return(
                      <span className="product-form-selected-tag" onClick={this.handleTagChange(`${tagger}`)}>{`${tagger}`}</span>
                      ) 
                    } else {
                      
                      return(
                        <span className="product-form-tag" onClick={this.handleTagChange(`${tagger}`)}>{`${tagger}`}</span>
                        )
                      }
                    })
                  }
                
              </span>
            </div>
          </div>
          <div className="product-form-input-div">
            <h4 className="product-form-input-des">Product Logo</h4>
            <input className="" type="file" onChange={this.handleFile('list_photo')} />
          </div>
          <div className="product-form-input-div">
            <h4 className="product-form-input-des">Product Pictures</h4>
            <input className="" type="file" onChange={this.handleFile('photos')} />
          </div>
          <button className="product-form-submit-button" onClick={this.handleSubmit}>ESCAPE IT</button>
        </form>
      </div>
    )
  }
}

export default withRouter(ProductForm);
