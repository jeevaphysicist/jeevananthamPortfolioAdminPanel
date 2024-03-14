import React from "react";
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import { blogdata } from "./Data";
import { useState } from "react";
import { FaRegImage } from "react-icons/fa6";
import {UploadFile} from "./Uploadfile";

const TextEditor = () => {
  const [blogData,setBlogData] = useState('');
  const [coverimage,setCoverimage] = useState('');
  const [title,setTitle] = useState('');


  
  var modules = {
    toolbar:[
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      ['link', 'image', 'video', 'formula'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']                                         // remove formatting button
    ]
  };

  var formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size","video","code-block","font","clean"
  ];

  const handleProcedureContentChange = (content) => {
    // console.log("content---->", content);
    setBlogData(content);
  };

  const imageHandler = (e)=>{
    let file = e.target.files[0] ;
        if (file) { 
    UploadFile(file)
    .then((downloadURL) => {
    //  console.log("Download URL: ", downloadURL);
        setCoverimage(downloadURL);
        // setUploading2(false);
     })
    .catch((error) => {
      console.error("Error:", error);
      // setUploading2(false);
     });
    }
  }

  const handleUploadBlogData = ()=>{
        let data = {
             Data: blogData,
             title:title,
             coverimage:coverimage
        }
        console.log("Data",data); 
  }

  return (
    <div >
      {/* <h1 style={{ textAlign: "center" }}>Text Editor In React JS</h1> */}
      <div style={{ display: "grid", justifyContent: "center"}}>
        <div className="my-5">
          <label>Title<sup className="text-[red]">*</sup></label>
          <input type="text" onChange={(e)=>setTitle(e.target.value)} className="w-[100%] h-[60px] border" />
        </div>
        <div className="my-5">
          <label>
          <div className="w-[100%] h-[300px] flex items-center justify-center border">
                {
                coverimage ? 
                <img src={coverimage} alt="" className="w-[100%] h-[100%] object-cover"  />
                :
                <FaRegImage className="w-[80%] h-[80%]"/>
                }
              </div>
          <input type="file" onChange={imageHandler} className="w-[100%] hidden h-[60px] border" />

          </label>
        </div>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          onChange={handleProcedureContentChange}
          style={{ height: "80vh",maxWidth:"800px" }}
        >
        </ReactQuill>
        
      </div>

      <div className="flex items-center mt-[100px] justify-center w-[100%]">
          <button className="bg-black text-white rounded-[10px] p-4" onClick={handleUploadBlogData}>Submit</button>
        </div>
     
      <div style={{ display: "grid", justifyContent: "center",marginTop:"100px"}}>
      <ReactQuill
        value={blogdata}
        readOnly={true}
        theme="bubble"
        style={{ maxWidth:"800px" }}
        modules={{ toolbar: false }}
      />
    </div>
    </div>
  );

}

export default TextEditor;