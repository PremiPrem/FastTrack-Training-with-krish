
const  inorder = (node) =>
{
  //  console.log("inoder")
    if(node !== null)
    {
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }
} 
export default inorder;
