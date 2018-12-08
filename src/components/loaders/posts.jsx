import React from "react"
import ContentLoader from "react-content-loader";

const LoadingPost = props => (
	<ContentLoader 
		height={120}
		width={400}
		primaryColor="#f3f3f3"
        secondaryColor="#CCCCCC"
        speed={3}
        {...props}
	>
		<rect x="50" y="5" rx="4" ry="4" width="140" height="6.4" /> 
		<rect x="50" y="20" rx="4" ry="4" width="89" height="6.4" /> 
		<rect x="0" y="50" rx="3" ry="3" width="350" height="6.4" /> 
		<rect x="0" y="65" rx="3" ry="3" width="380" height="6.4" /> 
		<rect x="0" y="80" rx="3" ry="3" width="201" height="6.4" /> 
		<circle cx="20" cy="20" r="20" />
	</ContentLoader>
)
export default LoadingPost