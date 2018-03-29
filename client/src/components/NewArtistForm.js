import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
class NewArtistForm extends Component {
  render () {
    return (
      <Form onSubmit={this.props.createNewArtist}>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' name="name" onChange={this.props.handleChange} value={this.props.newArtist.name}/>
        </Form.Field>
        <Form.Field>
          <label>Nationality</label>
          <input placeholder='Nationality' name="nationality" onChange={this.props.handleChange} value={this.props.newArtist.nationality}/>
        </Form.Field>
        <Form.Field>
          <label>Photo Url</label>
          <input placeholder='Photo Url' name="photo_url" onChange={this.props.handleChange} value={this.props.newArtist.photo_url}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default NewArtistForm
