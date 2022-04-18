import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    left: 30px;
    width: 210px;
    height: 180px;
    border-radius: 18px;
    background-color: #fff;
    box-shadow: 0px 17.5px 28px rgba(0, 0, 0, 0.1);
    padding: 20px;
    z-index: 1;
    opacity: 0;
    animation: showOnPage 0.5s linear forwards;
    bottom: -50px;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        strong {
            font-weight: 500;
        }
    }

    @keyframes showOnPage {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

`;

function generateSpan () {
    const amountBars = [...Array(13).keys()];
    let stylesSpan: any = [];

    amountBars.forEach(item => {
        stylesSpan.push(`
            div:nth-child(${item + 1}) {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                div {
                    background-color: #eff3fe;
                    height: 91px;
                    width: 2.1px;
                    border-radius: 5px;
                    display: flex;
                    justify-content: flex-end;    

                    span {
                        background-color: #5236ff;
                        display: block;
                        height: 0px;
                        max-height: ${Math.ceil(Math.random() * 100)}px;
                        width:  3.5px;
                        border-radius: 5px;
                        animation: animationHeight 1s linear forwards;
                    }
                }
                small {
                    color: #baccfd;
                    font-size: 10px;
                    margin-top: 10px;
                }
            }
        `);
    });

    return stylesSpan.join("");
}

export const Chart = styled.div`
    margin-top: 28px;
    ${generateSpan()}

    @keyframes animationHeight {
        from {
            height: 0px;
        }
        to {
            height: 91px;
        }
    }
`;