import React                          from 'react';
import Amount                         from '../Components/amount.jsx';
import { localize }                   from '../../../../_common/localize';

export const getTableColumnsTemplate = () => 
    [
        { title: localize('Date'),             col_index: 'date'    },
        { title: localize('Ref.'),             col_index: 'refid'   },
        { title: localize('Description'),      col_index: 'desc'    },
        { title: localize('Action'),           col_index: 'action'  },
        { title: localize('Potential Payout'), col_index: 'payout'  },
        { title: localize('Credit/Debit'),     col_index: 'amount', renderCellContent: (value) => <Amount value={value} /> },
        { title: localize('Balance'),          col_index: 'balance' },
    ];
