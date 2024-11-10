// import React, { useState } from 'react';
// import axios from 'axios';

// const EncryptionForm = () => {
//   const [text, setText] = useState('');
//   const [encryptionType, setEncryptionType] = useState('caesar');
//   const [result, setResult] = useState('');

//   const handleEncrypt = async () => {
//     try {
//       const response = await axios.post(`/api/encrypt/${encryptionType}`, { text });
//       setResult(response.data.encryptedText);
//     } catch (error) {
//       console.error('Error during encryption', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Encrypt Your Text</h2>
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter text to encrypt..."
//       />
//       <br />
//       <select value={encryptionType} onChange={(e) => setEncryptionType(e.target.value)}>
//         <option value="caesar">Caesar Cipher</option>
//         <option value="sha256">SHA-256</option>
//         <option value="base64">Base64</option>
//         <option value="md5">MD5</option>
//       </select>
//       <br />
//       <button onClick={handleEncrypt}>Encrypt</button>
//       <h3>Result: {result}</h3>
//     </div>
//   );
// };

// export default EncryptionForm;
