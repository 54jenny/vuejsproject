<template>
    <article id="board">
        <h2 className="major">Board</h2>
        <form method="post" action="#">
            <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"/>
            </div>
            <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
                <li id="testbtn">
                    <a className="button special">Send Message</a>
                </li>
                <li><input type="reset" value="Reset"/></li>
            </ul>
        </form>
        <h3></h3>
        <!-- <h3>List</h3>
        <div className="table-wrapper">
            <table className="alt">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th colSpan="5">Content</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.posts.map( post => { return (
                    <tr>
                        <td>{post.name}</td>
                        <td colSpan="5">{post.content}</td>
                        <td>{post.createdAt.split("T")[0]}</td>
                    </tr>
                    ) } ) }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2"></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div> -->

    </article>
</template>

<script>
    export default {
        name: 'BoardPage',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped="scoped"> h3 { margin: 40px 0 0; } ul { list-style-type:
none; padding: 0; } li { display: inline-block; margin: 0 10px; } a { color:
#42b983; } </style> -->