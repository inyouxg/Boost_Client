import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as G from "../../components/post/MakePostStyle";

export default function MakePost () {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postPassword,setPostPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tags,setTags] = useState([]);
  const [location, setLocation] = useState("");
  const [moment, setMoment] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const {postId} = useParams();

  const handleKeyDown = (e) => {
    if(e.key != "Enter") return; //엔터키 아닐 경우 바로 리턴
    const value = e.target.value;
    if(!value.trim()) return; //입력값이 없을 경우 바로 리턴
    if (tags.includes(value)) return; // 중복 태그 방지

    setTags([...tags, value]);
    e.target.value = "";
  }

  const removeTag = (tagIndex) => { 
    setTags(tags.filter((tag,index) => index !== tagIndex));
  }

  // const handleImg = async (e) => {
  //   const file = e.target.files[0];
  //   if(!file) return;

  //   const formData = new FormData();
  //   formData.append("image", file);

  //   try{
  //     const response = await fetch("/api/image",{
  //       method: "POST",
  //       body: formData, // 자동으로 Content Type 설정
  //     });
  //     const imgData = await response.json();
  //     if (!response.ok) throw new Error(imgData.message || "이미지 업로드 실패");
  //     setImageUrl(imgData.imageUrl);

  //   } catch(error){
  //     console.log("이미지 업로드 실패 :", error);
  //     alert("이미지 업로드에 실패했습니다.");
  //   }

  //mock data 기반
  const handleImg = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  const handleSubmit = () => {
    console.log("Mock submission data:", formData);
    setTimeout(() => {
      alert("추억 올리기가 완료되었습니다. (Mock)");
      // 폼 초기화
      setNickname("");
      setTitle("");
      setContent("");
      setPostPassword("");
      setImageUrl("");
      setTags([]);
      setLocation("");
      setMoment("");
      setIsPublic(true);
      navigate(-1);
    }, 500);


  } 
    const formData = {
      nickname,
      title,
      content,
      postPassword,
      imageUrl,
      tags,
      location,
      moment,
      isPublic,
    }

  //   try {
  //     const response = fetch(`/api/groups/${postId}/posts`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     const data = response.json();
  //     console.log(data);  

  //     if (!response.ok) {
  //       alert(`${data.message}`);
  //       navigate(-1);
  //     }else{
  //       console.log("업데이트 완료:", data);
  //       setNickname("");
  //       setTitle("");
  //       setContent("");
  //       setPostPassword("");
  //       setImageUrl("");
  //       setTags([]);
  //       setLocation("");
  //       setMoment(null);
  //       setIsPublic(true);
  //       alert("추억 올리기가 완료되었습니다.");
  //       navigate(-1);
        
  //     }
  //   } catch (error) {
  //     console.error("오류 발생:", error);
  // }
  
  return (
    <>
      <G.Wrapper>
        <G.Container>
          <G.MainTitle>추억 올리기</G.MainTitle>
          <G.FlexBox>
          <div>
            <G.Title>닉네임</G.Title>
            <G.GroupTitleText value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <G.Title>제목</G.Title>
            <G.GroupTitleText value={title} onChange={(e) => setTitle(e.target.value)} />
            <G.Title>이미지</G.Title>
            <span>
              <G.ImgInput type="text" value={imageUrl} placeholder="이미지를 업로드하세요" readOnly/>
              <input
                type="file"
                id="fileUpload"
                style={{ display: "none" }}
                onChange={handleImg}/>
              <G.ImgLabel htmlFor="fileUpload">
                파일 선택
              </G.ImgLabel>
            </span>
            <G.Title>본문</G.Title>
            <G.GroupContentText value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <div>
            <G.TagContainer>
              <G.Title>태그</G.Title>
              <G.TagInput onKeyDown={handleKeyDown} />
              {
                tags.map((tag, index) => (
                  <G.TagItem key={index}>
                    <span>{tag}</span>
                    <span onClick={() => removeTag(index)}>&times;</span>
                  </G.TagItem>
                ))}
            </G.TagContainer>
            <G.Title>장소</G.Title>
            <G.GroupTitleText value={location} onChange={(e) => setLocation(e.target.value)} />
            <G.Title>추억의 순간</G.Title>
            <G.GroupTitleText type="date" value={moment ? moment : ""} onChange={(e) => setMoment(e.target.value)} />
            <G.Title>추억 공개 선택</G.Title>
            <G.ToggleLabel>공개</G.ToggleLabel>
            <G.ToggleSwitch type="checkbox" checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
            <G.Title>비밀번호 생성</G.Title>
            <G.PasswordInput value={postPassword} onChange={(e) => setPostPassword(e.target.value)} />
          </div>
          </G.FlexBox>
          <G.SubmitButton onClick={handleSubmit}>수정하기</G.SubmitButton>
        </G.Container>
      </G.Wrapper>
  </>
  )
}
