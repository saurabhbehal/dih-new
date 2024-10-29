import React from "react";
const ScheduleChatSection = () => {
    return (
      <section
        className="relative"
        style={{
          backgroundImage: 'url("images/footer_BG_01.jpg")',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          height: '400px',
          backgroundSize: 'cover',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.51)',
          backgroundBlendMode: 'darken',
        }}
      >
        <div className="text-center mx-auto text-white">
          <h1 className="text-4xl">
          “ Get Custom Interiors / Modular Interiors/ Architectural Services <br/>
  at Most Affordable Prices with Our Team. ”
          </h1>
          <br />
          <a
            href="https://api.whatsapp.com/send?phone=9899264978&amp;text=MODULAR KITCHEN DELHI - INDIA | MODULAR KITCHEN MANUFACTURERS"
            className="schedule-btn font-bold bg-yellow-400 text-gray-900 py-2 px-4 rounded-full hover:bg-yellow-500"
          >
            SCHEDULE A CHAT
          </a>
        </div>
      </section>
    )
  }

export default ScheduleChatSection