import { useState } from 'react'

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
  'Step 4 is working',
  'Step 5 is working',
]

export default function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handlePrevious(e) {
    if (step > 1) {
      setStep((currStep) => currStep - 1)
    } else {
      setStep(() => messages.length)
    }
  }

  function handleNext(e) {
    if (step < messages.length) {
      setStep((currStep) => currStep + 1)
    } else {
      setStep(() => 1)
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {isOpen ? 'CLOSE' : 'OPEN'}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((msg, i) => {
              return (
                <div className={`${step >= i + 1 ? 'active' : ''}`} key={i}>
                  {i + 1}
                </div>
              )
            })}
          </div>

          <p className="message">
            step: {step} : {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              color="#fff"
              handleOnClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>
            <Button
              bgColor="#7950f2"
              color="#fff"
              handleOnClick={handleNext}
            >
               Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

function Button({ bgColor, color, handleOnClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={handleOnClick}
    >
      {children}
    </button>
  )
}
