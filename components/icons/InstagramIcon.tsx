import React from "react";

interface InstagramIconProps {
  className: string;
  color: string;
}

const InstagramIcon: React.FC<InstagramIconProps> = ({ className, color }) => {
  return (
    <svg
      width="auto"
      height="auto"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.8 2.83984H16.2C19.4 2.83984 22 5.43984 22 8.63984V17.0398C22 18.5781 21.3889 20.0534 20.3012 21.1411C19.2135 22.2288 17.7383 22.8398 16.2 22.8398H7.8C4.6 22.8398 2 20.2398 2 17.0398V8.63984C2 7.10159 2.61107 5.62634 3.69878 4.53862C4.78649 3.45091 6.26174 2.83984 7.8 2.83984ZM7.6 4.83984C6.64522 4.83984 5.72955 5.21913 5.05442 5.89426C4.37928 6.56939 4 7.48506 4 8.43984V17.2398C4 19.2298 5.61 20.8398 7.6 20.8398H16.4C17.3548 20.8398 18.2705 20.4606 18.9456 19.7854C19.6207 19.1103 20 18.1946 20 17.2398V8.43984C20 6.44984 18.39 4.83984 16.4 4.83984H7.6ZM17.25 6.33984C17.5815 6.33984 17.8995 6.47154 18.1339 6.70596C18.3683 6.94038 18.5 7.25832 18.5 7.58984C18.5 7.92136 18.3683 8.23931 18.1339 8.47373C17.8995 8.70815 17.5815 8.83984 17.25 8.83984C16.9185 8.83984 16.6005 8.70815 16.3661 8.47373C16.1317 8.23931 16 7.92136 16 7.58984C16 7.25832 16.1317 6.94038 16.3661 6.70596C16.6005 6.47154 16.9185 6.33984 17.25 6.33984ZM12 7.83984C13.3261 7.83984 14.5979 8.36663 15.5355 9.30431C16.4732 10.242 17 11.5138 17 12.8398C17 14.1659 16.4732 15.4377 15.5355 16.3754C14.5979 17.3131 13.3261 17.8398 12 17.8398C10.6739 17.8398 9.40215 17.3131 8.46447 16.3754C7.52678 15.4377 7 14.1659 7 12.8398C7 11.5138 7.52678 10.242 8.46447 9.30431C9.40215 8.36663 10.6739 7.83984 12 7.83984ZM12 9.83984C11.2044 9.83984 10.4413 10.1559 9.87868 10.7185C9.31607 11.2811 9 12.0442 9 12.8398C9 13.6355 9.31607 14.3986 9.87868 14.9612C10.4413 15.5238 11.2044 15.8398 12 15.8398C12.7956 15.8398 13.5587 15.5238 14.1213 14.9612C14.6839 14.3986 15 13.6355 15 12.8398C15 12.0442 14.6839 11.2811 14.1213 10.7185C13.5587 10.1559 12.7956 9.83984 12 9.83984Z"
        fill={color}
      />
    </svg>
  );
};

export default InstagramIcon;
