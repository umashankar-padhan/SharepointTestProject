import * as React from 'react';
import styles from './ShoppingCartWebpart.module.scss';
import { IShoppingCartWebpartProps } from './IShoppingCartWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';

Connect-PnPOnline -Url $adminCenterUrl -AppId "hsusubbau98882727" -AppSecret "1234567890098764"

export default class ShoppingCartWebpart extends React.Component<IShoppingCartWebpartProps, {}> {
  public render(): React.ReactElement<IShoppingCartWebpartProps> {
    return (
      <div className={ styles.shoppingCartWebpart }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!!!!! Test again</span>Test;
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts. test merge Welcome to merge vcode</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
