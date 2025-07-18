import { notifications } from 'ionicons/icons'
import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">HTML</h3>
              <h3 className="skills__level">Baisc</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">CSS</h3>
              <h3 className="skills__level">Advanced</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <h3 className="skills__level">Intermediate</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <h3 className="skills__level">Intermediate</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">Git</h3>
              <h3 className="skills__level">Intermediate</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className="skills__name">React</h3>
              <h3 className="skills__level">Intermediate</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend