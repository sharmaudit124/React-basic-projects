import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [isNumRequired, setIsNumberRequired] = useState(true);
  const [isCharRequired, setIsCharRequired] = useState(false);
  const [passwordVal, setPasswordVal] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(passwordVal)
  }, [passwordVal])

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumRequired) str += "0123456789"
    if (isCharRequired) str += "!@#$%^&*()_{}[]"

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPasswordVal(pass);

  },
    [isNumRequired, isCharRequired, length])

  useEffect(() => {
    generatePassword();
  }, [isNumRequired, isCharRequired, length, generatePassword])
  return (
    <>
      <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
        <div>
          <div className="mx-auto max-w-2xl lg:text-center mb-3">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Password Generator
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
              Generate your password with simple clicks!
            </p>
          </div>
          <hr />
          <div className="mt-3 mb-1 max-auto mx-w-lg:text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-black">
              Easy and User Friendly
            </p>
            <div className="flex w-full items-center space-x-2 md:w-1/3 my-5">
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Your Password"
                value={passwordVal}
                ref={passwordRef}
                readOnly
              ></input>
              <button
                type="button"
                onClick={copyPasswordToClipboard}
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Copy
              </button>
            </div>
            <div className="flex text-l gap-x-4">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  defaultChecked={isNumRequired}
                  id="numInput"
                  onChange={() => {
                    setIsNumberRequired((prev) => !prev)
                  }} />
                <label >Numbers</label>
              </div>

              <div className="flex items-center gap-x-2">
                <input type="checkbox"
                  defaultChecked={isCharRequired}
                  id="charInput"
                  onChange={() => {
                    setIsCharRequired((prev) => !prev)
                  }} />
                <label >Special Characters</label>
              </div>

              <div className="flex items-center gap-x-2">
                <input type="range"
                  min={6}
                  max={30}
                  value={length}
                  onChange={(e) => { setLength(e.target.value) }}
                />
                <label htmlFor="bar">Value: {length}</label>
              </div>

            </div>
          </div>
          <hr />
          <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-9 w-9 text-gray-700"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  Simply Copy &amp; Paste
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                  sint.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-9 w-9 text-gray-700"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">Easy to Customize</h3>
                <p className="mt-3 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                  sint.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-9 w-9 text-gray-700"
              >
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
              </svg>
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  Made with TailwindCSS
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                  sint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default App
