import React, { Component } from 'react'

import Rallax from 'rallax-component'

const ReactMarkdown = require('react-markdown')

export default class App extends Component {
  render () {
    const boxs = ['#194', 'orange', '#189', 'pink']
    const whenProps = [
      {
        condition: () => window.scrollY > 750,
        action: parallax => parallax.stop()
      },
      {
        condition: () => window.scrollY < 750,
        action: parallax => parallax.start()
      }
    ]
    const codeStrOne = `
      const whenProps = [
        {
          condition: () => window.scrollY > 750,
          action: parallax => parallax.stop()
        },
        {
          condition: () => window.scrollY < 750,
          action: parallax => parallax.start()
        }
      ]


      <Rallax
        when={whenProps}
        key={color}
        options={
          index % 2 === 0 ? {speed: 0.5} : {speed: 0.3}
        }
      >
        <div></div>
      </Rallax>
    `
    const codeStrTwo = `
      css:
      img {
        position: relative;
        top: -502.2px;
        left: -100px;
        height: 851.1px;
        width: 1050px;
      }


      <Rallax className='img__wrapper' child={true}>
        <img src='https://chriscavs.github.io/rallax-demo/test-image3.jpg' alt='demo'/>
      </Rallax>
    `
    return (
      <div>
        <div className='title'>
          <h1>Parallax React Component Demo</h1>
          <span>inspired by <a href='https://chriscavs.github.io/rallax-demo/'>rallax.js</a></span>
        </div>
        <div className='desc'>
          <span>
            This is a simple parallax component based on React and Rallaxjs.
          </span>
        </div>
        <div className='box__container'>
          {
            boxs.map((color, index) => (
              <Rallax
                when={whenProps}
                key={color}
                options={
                  index % 2 === 0 ? {speed: 0.5} : {speed: 0.3}
                }
              >
                <div className='box' style={{backgroundColor: color}}>
                  {index}
                </div>
              </Rallax>
            ))
          }
        </div>
        <div className='description code'>
          <ReactMarkdown source={ codeStrOne }/>
        </div>
        <div className='img__container'>
          <Rallax className='img__wrapper' child={true}>
            <img src='https://chriscavs.github.io/rallax-demo/test-image3.jpg' alt='demo'/>
          </Rallax>
        </div>
        <div className='description code'>
          <ReactMarkdown source={ codeStrTwo }/>
        </div>
      </div>
    )
  }
}
