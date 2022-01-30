import "./index.scss";
import Classifier from "../Components/Classifier/index.js";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as LogoText } from "../assets/logo_text.svg";
import { ReactComponent as DesignText } from "../assets/Design.svg";

const CV1 = (props) => {
    return (
        <div className="App">
            <div style={{ height: 50 }}>
                {/* dummy div, replace it with the navbar component */}
            </div>
            <div
                style={{
                    backgroundColor: "#f7f7f7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    padding: 50,
                }}
            >
                <Logo transform="scale(2)"></Logo>
                <div style={{ marginInlineStart: 100 }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                        }}
                    >
                        <LogoText></LogoText>
                        <h1
                            style={{
                                color: "#9EA0A6",
                                fontWeight: 300,
                                marginInline: 15,
                            }}
                        >
                            |
                        </h1>
                        <DesignText></DesignText>
                    </div>
                    <h1
                        style={{
                            fontFamily: "inter",
                            fontWeight: 800,
                            fontSize: 64,
                            marginBlockEnd: 20,
                        }}
                    >
                        {props.projectName}
                    </h1>
                    <p
                        style={{
                            fontFamily: "inter",
                            width: 800,
                            textAlign: "left",
                        }}
                    >
                        A short description of your project. A short description
                        of your project.A short description of your project. A
                        short description of your project. A short description
                        of your project.A short description of your project. A
                        short description of your project. A short description
                        of your project. A short description of your project.A
                        short description of your project. A short description
                        of your project. A short description of your project.A
                        short description of your project. A short description
                        of your project.
                    </p>
                </div>
            </div>
            <Classifier />
        </div>
    );
}

export default CV1;
