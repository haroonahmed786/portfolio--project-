import React from 'react'
import "./Project.css"
import Pic from "../../images/mypic.jpg";
export const Project = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (

    <div className='borderdiv'>
      <div className='subdiv'>
        <div className='picture1'>
          <div className='sub-one'>
            <div className='sub-two'><  img src={Pic} alt='' height="150px" width="155px" /></div>
          </div>
        </div>
        <h2 className='name1'>@Haroonahmed</h2>
        <p className='intro'>Computer Engineer | Frontend | Reactjs Developer</p>

        <button class="buttonone" onClick={() => openInNewTab('http://localhost:3000/')}>Mywebsite</button>
        <button class="buttonone" onClick={() => openInNewTab('https://github.com/haroonahmed786')}>MyGithub</button>
        <button class="buttonone" onClick={() => openInNewTab('https://LinkedIn.com/Haroon Ahmed')}>MyLinkedin</button>
      </div>

    </div>

  )
}
