import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./index.scss";
import axios from "axios";

export default function Classifier() {
    const [files, setFiles] = useState([]);
    const [recentImage, setRecentImage] = useState();
    const [reclassify, setReclassify] = useState(false);

    const getImageClass = (obj) => {
        axios
            .get(`http://127.0.0.1:8000/api/images/${obj.data.id}/`, {
                headers: {
                    accept: "application/json",
                },
            })
            .then((resp) => {
                setRecentImage(resp);
                console.log(resp);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const sendImage = () => {
        let formData = new FormData();
        files[0] && formData.append("picture", files[0], files[0].name);
        axios
            .post("http://127.0.0.1:8000/api/images/", formData, {
                headers: {
                    accept: "application/json",
                    "content-type": "multipart/form-data",
                },
            })
            .then((resp) => {
                getImageClass(resp);
                console.log(resp.data.id);
            })
            .catch((err) => {
                console.log(err);
            });
        setFiles([]);
    };

    const { isDragActive, getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setFiles(acceptedFiles);
            setReclassify(true);
        },
    });

    return (
        <div>
            <h1
                style={{
                    width: "60%",
                    margin: "auto",
                    padding: 30,
                    textAlign: "left",
                    fontWeight: 800,
                    fontFamily: "inter",
                }}
            >
                Try it out:
            </h1>
            {!reclassify && (
                <div {...getRootProps({ className: "dropzone back" })}>
                    <input {...getInputProps()} />
                    <p>
                        {isDragActive
                            ? "Drop your image here"
                            : "Drag and drop an image, or click to select one"}
                    </p>
                </div>
            )}

            <div>
                <ul>
                    {files.map((file) => (
                        <div>
                            <img
                                style={{ maxWidth: 1000 }}
                                src={URL.createObjectURL(file)}
                            ></img>
                            {console.log(file)}
                        </div>
                    ))}
                </ul>
                {files.length > 0 && (
                    <button className="btn-main" onClick={sendImage}>
                        Classify!
                    </button>
                )}
                {recentImage && (
                    <div>
                        <img
                            style={{ maxWidth: 1000 }}
                            src={recentImage.data.picture}
                        ></img>
                        <p style={{ paddingBlockStart: 20 }}>
                            Classification result:
                        </p>
                        <h1
                            style={{
                                fontWeight: 800,
                                fontFamily: "inter",
                                fontSize: 64,
                            }}
                        >
                            {recentImage.data.classified}
                        </h1>
                    </div>
                )}
                {reclassify && (
                    <button
                        className="btn-main"
                        onClick={() => {
                            setReclassify(false);
                            setFiles([]);
                            setRecentImage();
                        }}
                    >
                        Select another image
                    </button>
                )}
            </div>
        </div>
    );
}
