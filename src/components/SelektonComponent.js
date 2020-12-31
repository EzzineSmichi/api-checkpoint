import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SelektonComponent = () => {
    return (
        <div>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton animation="wave" variant="rect" width={270} height={200}/>
                <Skeleton animation="wave" variant="rect" width={270} height={200}/>
                <Skeleton animation="wave" variant="rect" width={270} height={200}/>
                <Skeleton animation="wave" variant="rect" width={270} height={200}/>
                <Skeleton animation="wave" variant="rect" width={270} height={200}/>
                <Skeleton animation="wave" variant="rect" width={270} height={200}/>
                <Skeleton animation="wave" variant="rect" width={270} height={200}/>
                <Skeleton animation="wave" variant="rect" width={270} height={200}/>
                <Skeleton animation="wave" variant="rect" width={270} height={200}/>
                <Skeleton animation="wave" variant="rect" width={270} height={200}/>

            </SkeletonTheme>  
        </div>
    )
}

export default SelektonComponent
