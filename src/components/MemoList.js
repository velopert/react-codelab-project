import React from 'react';
import { Memo } from 'components';

class MemoList extends React.Component {
    render() {

        const mapToComponents = data => {
            return data.map((memo, i) => {
                return (
                    <Memo
                        data={memo}
                        ownership={ memo.writer===this.props.currentUser }
                        key={memo._id}
                        onEdit={this.props.onEdit}
                        index={i}
                    />
                );
            });
        };

        return(
            <div>{mapToComponents(this.props.data)}</div>
        );
    }
}

MemoList.propTypes = {
    data: React.PropTypes.array,
    currentUser: React.PropTypes.string,
    onEdit: React.PropTypes.func
};

MemoList.defaultProps = {
    data: [],
    currentUser: '',
    onEdit: (id, index, contents) => {
        console.error('onEdit not defined');
    }
};

export default MemoList;
