import React, { Component } from 'react'

export  class Newsitems extends Component {
  render() {
    let {ntitle,nurl,ndes,urllink,author,publish,badge}=this.props
    return (
      <div className='newsitem'>
        <p className='badge'>{badge}</p>
            <div className='flex2newsitem'>
            <img className='img' src={nurl} alt=""/>
            <h3>{ntitle}...</h3>
            <p>{ndes}...</p>
            <p className='authorcolor'>By: {author} on {new Date(publish).toGMTString()}</p>
            <a className='btn' target="__blank" href={urllink}>Read More..</a>
          </div>        
      </div>
    )
  }
}
