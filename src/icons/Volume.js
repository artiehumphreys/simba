const Volume = ({ size }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="9" width="4" height="6" fill="white" />
        <polygon points="7,9 11,6 11,18 7,15" fill="white" />
        <path d="M 12,8 Q 14,12 12,16" stroke="white" strokeWidth="1" fill="none" />
        <path d="M 14,6 Q 17,12 14,18" stroke="white" strokeWidth="1" fill="none" />
        <path d="M 16,4 Q 20,12 16,20" stroke="white" strokeWidth="1" fill="none" />
    </svg>
)

export default Volume