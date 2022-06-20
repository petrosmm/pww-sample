import { CSSProperties } from "react";

export function makeHorizontalRuler(height: string = "10px", width: string = "100%", myClassName: string = "bg-palette1-2", marginBottom?: number) {
    if (height == undefined
        || height == null
        || height?.length === 0) {
        height = "10px";
    }

    if (width == undefined
        || width == null
        || width?.length === 0) {
        width = "100%";
    }

    let styles = {
        height: height,
        width: width,
    } as CSSProperties;

    if (marginBottom !== undefined && marginBottom?.toString()?.length > 0)
        styles.marginBottom = `${marginBottom}%`;

    return <div className={myClassName} style={styles} > </div>;

    return <hr className={myClassName} style={{
        height: height,
        width: width
    }
    } />;
}

export function makeSectionInnerMenu(title: string, items: string[], sizeAsClassName: string = "col-md-4 col-12 mb-3") {
    return <>
        <div className={sizeAsClassName} role="navigation">
            <h6 className="text-palette1-2 text-uppercase" style={{
                fontWeight: "bold"
            }}>
                {title}
            </h6>
            {makeHorizontalRuler("3.5px", "10%", "bg-palette3-1", 3)}
            {
                items.map((item, index) => {

                    return <div key={index} style={{
                        marginBottom: "1.5%"
                    }}>
                        <a className="text-palette1-1" href="#">
                            {item}
                        </a>
                    </div>;
                })
            }
        </div>
    </>;
}