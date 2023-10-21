'use client'
import { usePathname } from "next/navigation";
import { useContext, useState, useEffect, createContext } from "react";

const ScrollContext = createContext();
const BookNowContext = createContext();
const FooterContext = createContext();
const ClientBottomContext = createContext();

export function useScrollPosition(){
    return useContext(ScrollContext);
}
export function useBookNowPosition(){
    return useContext(BookNowContext);
}
export function useFooterPosition(){
    return useContext(FooterContext);
}
export function useClientBottom(){
    return useContext(ClientBottomContext)
}

export default function ScrollProvider({ children }){
    const [scrollPosition, setScrollPosition] = useState(0);
    const [bookNowPosition, setBookNowPosition] = useState(1000);
    const [footerPosition, setFooterPosition] = useState(2000);
    const [clientBottom, setClientBottom] = useState(null);

    const dynamicRoute = usePathname();
    
    useEffect(()=>{
        let bookNowCoords;
        let footerCoords;
        const wrapper = document.querySelector('#main_wrapper');
        const footer = document.querySelector('#footer');
        const mainButton = document.querySelector(`[data-id='main']`);
        const handleScrollPosition = () =>{
            setScrollPosition(wrapper.scrollTop);
            if(mainButton){
                bookNowCoords = mainButton.getBoundingClientRect();
                setBookNowPosition(Math.trunc(bookNowCoords.bottom - bookNowCoords.height));
            }
            footerCoords = footer.getBoundingClientRect();
            setFooterPosition(footerCoords.top);
        }
        wrapper.addEventListener('scroll', handleScrollPosition)

        return ()=> {
            wrapper.removeEventListener('scroll', handleScrollPosition);
        }
    },[dynamicRoute])
    useEffect(()=>{
        setClientBottom(window.innerHeight);
    },[])

    return(
        <ScrollContext.Provider value={scrollPosition}>
            <BookNowContext.Provider value={bookNowPosition}>
                <FooterContext.Provider value={footerPosition}>
                    <ClientBottomContext.Provider value={clientBottom}>
                        {children}
                    </ClientBottomContext.Provider>
                </FooterContext.Provider>
            </BookNowContext.Provider>
        </ScrollContext.Provider>
    )
}



