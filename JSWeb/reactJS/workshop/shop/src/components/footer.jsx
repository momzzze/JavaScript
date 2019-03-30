import React from 'react'


const Footer=()=>{
    return (
        <div>
            <footer id="footer" className="page-footer mt-4">
              © Book Library {new Date().getFullYear()}
            </footer>
          </div>
    )
}

export default Footer