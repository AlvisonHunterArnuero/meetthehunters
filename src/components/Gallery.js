import React from "react";
import { useSelector } from "react-redux";

function Gallery() {
  const selectedMemberPhoto = useSelector((state) => state.familyMembersReducer);
  // process the imgs on the public folder
  const displayMemberPic = (strPath) =>
    process.env.PUBLIC_URL + "/pics/" + strPath;

  return (
    <>
      <hr className='border-top' />
      <div className='container'>
        <div className='box'>
          <img
            src={
              selectedMemberPhoto?.photos
                ? displayMemberPic(selectedMemberPhoto.photos.photo1)
                : displayMemberPic("liam01.jpeg")
            }
            className='fade-in chosen'
            alt={selectedMemberPhoto?.name}
          />
        </div>
        <div className='box'>
          <img
            src={
              selectedMemberPhoto?.photos
                ? displayMemberPic(selectedMemberPhoto.photos.photo2)
                : displayMemberPic("liam02.jpeg")
            }
            className='fade-in chosen'
            alt={selectedMemberPhoto?.name}
          />
        </div>
        <div className='box'>
          <img
            src={
              selectedMemberPhoto?.photos
                ? displayMemberPic(selectedMemberPhoto.photos.photo3)
                : displayMemberPic("liam03.jpeg")
            }
            className='fade-in chosen'
            alt={selectedMemberPhoto?.name}
          />
        </div>
        <div className='box'>
          <img
            src={
              selectedMemberPhoto?.photos
                ? displayMemberPic(selectedMemberPhoto.photos.photo4)
                : displayMemberPic("liam04.jpeg")
            }
            className='fade-in chosen'
            alt={selectedMemberPhoto?.name}
          />
        </div>
      </div>
      <hr className='border-top' />
    </>
  );
}

export default Gallery;
