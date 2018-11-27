import ContentLoader from "react-content-loader"
import React from "react"

const ProfileDetailsLoader = props => (
  <ContentLoader 
    rtl
    speed={1}
    height={500}
    width={800}
    primaryColor="#f3f3f3"
    secondaryColor="#CCCCCC"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="800" height="200" /> 
    <circle cx="160" cy="200" r="70" /> 
    <rect x="40" y="290.87" rx="0" ry="0" width="175" height="25.5" /> 
    <rect x="40" y="328.87" rx="0" ry="0" width="73" height="19.25" /> 
    <rect x="40" y="364.36" rx="0" ry="0" width="51.83" height="34.43" /> 
    <rect x="140" y="328.87" rx="0" ry="0" width="73" height="19.25" /> 
    <rect x="140" y="364.36" rx="0" ry="0" width="51.83" height="34.43" /> 
    <rect x="240" y="285.67" rx="0" ry="0" width="168.48" height="22" /> 
    <rect x="240" y="322.67" rx="0" ry="0" width="147.6" height="9" /> 
    <rect x="240" y="344.17" rx="0" ry="0" width="106.6" height="6.48" /> 
    <rect x="240" y="383.67" rx="0" ry="0" width="147.6" height="9" /> 
    <rect x="240" y="405.58" rx="0" ry="0" width="100.04" height="6.12" /> 
    <rect x="440" y="283.67" rx="0" ry="0" width="168.48" height="22" /> 
    <rect x="440" y="323.67" rx="0" ry="0" width="147.6" height="9" /> 
    <rect x="440" y="345.17" rx="0" ry="0" width="106.6" height="6.48" /> 
    <rect x="440" y="380.67" rx="0" ry="0" width="147.6" height="9" /> 
    <rect x="440" y="402.58" rx="0" ry="0" width="100.04" height="6.12" />
  </ContentLoader>
)
export default ProfileDetailsLoader;