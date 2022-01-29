import React, {useRef} from "react";
import useFetch from "./useFetch";


export default function ReactForm() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { data, setData } = useFetch();

    console.log(data);
    console.log(data.results);
    console.log(data.results.data);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(nameRef !== "" && emailRef !== "" && passwordRef !== ""){
            console.log("name :" + nameRef.current.value, "email: " + emailRef.current.value, "password: " + passwordRef.current.value);
        }
    };

    const FocusName = () => {
        nameRef.current.focus();
    }

    const FocusEmail = () => {
        emailRef.current.focus();
    }
    const FocusPassword = () => {
        passwordRef.current.focus();
    }
  
    const handleReset = () => {
        nameRef.current.value = ""
        emailRef.current.value = ""
        passwordRef.current.value = ""
    };
  

    return (
      <React.Fragment>
        <div>
            <p>part 1</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input placeholder="name" type="text" ref={nameRef}/>
                </label>
                <label>
                    Email:
                    <input placeholder="email" type="text" ref={emailRef}/>
                </label>
        
        
                <label>
                    Password:
                    <input placeholder="password" type="password" ref={passwordRef}/>
                </label>
                <hr />
                <button onClick={FocusName}>Focus Name Input</button>
                <button onClick={FocusEmail}>Focus Email Input</button>
                <button onClick={FocusPassword}>Focus Password Input</button>
                <hr />
                <button type="submit">Submit</button>
                <button onClick={handleReset}>Reset</button>
            </form>
            </div>
            <div>
            <hr />
            <p>part 2</p>
            <label>
                Search:
                <input
                placeholder="search with debounce"
                type="text"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                />
            </label>

            <br/>

            {data.results.data && data.results.data.length > 0 ? (
                <ul>
                    {data.results.data.map((el, i) => (
                        <li key={i}>
                            <img src={el.images.original.url} alt={el.title} />
                            <p>{el.title}</p>
                        </li>
                    ))}
                </ul>
            ) : null}
            
        </div>
      </React.Fragment>
    );
  }