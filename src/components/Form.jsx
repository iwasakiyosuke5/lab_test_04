import React, {useState, useEffect} from 'react';
import {useForm} from "../hooks/useForm";

const Form = () => {

 const {name, email, data, handleEmailChange, handleNameChange}= useForm();


  return (
    <div>
        {/* データを表示 */}
        {data && //絶対に書いた方がいい
            data.map((i, index) => (
                <div key={index}>  {/* keyは必須 */}    
                    <h1>{index}番目</h1>
                    <p>{i.name}</p>
                    <p>{i.title}</p>
                    <p>{i.userId}</p>
                </div>
        ))}


        {/* Formのサンプルを記述します */}
        
        <div>
            <p>名前入力</p>
            <input type="text" value={name} onChange={handleNameChange} id="" />
        </div>
        <div>
            <p>メールアドレス入力</p>
            <input type="email" value={email} id="" onChange={handleEmailChange}/>
        </div>

    <br />
    <hr />
    <p>名前入力： {name}</p>
    <p>email入力: {email}</p>
    </div>


  );
};

export default Form;