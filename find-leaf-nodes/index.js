class binarySearchTree{
    constructor(){
        this.root= null;
    }
    
    insert(data){
        var newNode = new Node(data);
        if(this.root === null)
            this.root = newNode;
        
        else
            this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null)
                node.left = newNode;
            
            else
             this.insertNode(node.left, newNode);
        }
        else {
            if(node.right ===null)
            node.right = newNode;
            else
            this.insertNode(node.right, newNode);
        }
    }
      inorder = (node)=>
{
  //  console.log("inoder")
    if(node !== null)
    {
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }
} 
   
    getRootNode()
{
    return this.root;
}
    

}
var BST = new binarySearchTree();
  
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
var root = BST.getRootNode();
console.log("inorder traversal");
BST.inorder(root);
